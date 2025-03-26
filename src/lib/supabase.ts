
import { createClient } from '@supabase/supabase-js';
import { toast } from "sonner";

// Fallback values for development - these are intentionally invalid to trigger fallback behavior
const DEFAULT_SUPABASE_URL = 'https://your-project-id.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'your-anon-key';

// Try to get values from environment variables, fall back to defaults if not available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Flag to track if we're using default credentials
export const isUsingDefaultCredentials = supabaseUrl === DEFAULT_SUPABASE_URL || supabaseAnonKey === DEFAULT_SUPABASE_ANON_KEY;

// Log a warning if using default values
if (isUsingDefaultCredentials) {
  console.warn(
    'Using default Supabase credentials. Please set the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY ' +
    'environment variables with your actual Supabase project details.'
  );
}

// Type for the reviews table in Supabase
export type ReviewRecord = {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
  featured: boolean;
  date: string;
  created_at?: string;
};

// Local storage helper functions
export const LOCAL_STORAGE_KEY = 'offline_reviews';

// Export reviews to CSV (to allow users to save their data)
export const exportReviewsToCSV = (reviews: ReviewRecord[]): string => {
  const headers = ['id', 'quote', 'author', 'role', 'rating', 'featured', 'date'].join(',');
  const csvRows = reviews.map(review => {
    return [
      review.id,
      `"${review.quote.replace(/"/g, '""')}"`, // Escape quotes in the quote field
      `"${review.author}"`,
      `"${review.role}"`,
      review.rating,
      review.featured,
      review.date
    ].join(',');
  });
  
  return [headers, ...csvRows].join('\n');
};

// Import reviews from CSV
export const importReviewsFromCSV = (csvContent: string): ReviewRecord[] => {
  const rows = csvContent.split('\n');
  const headers = rows[0].split(',');
  
  return rows.slice(1).map((row, index) => {
    // Handle quoted fields properly (especially for the quote field that might contain commas)
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;
    
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      
      if (char === '"') {
        if (insideQuotes && row[i + 1] === '"') {
          // Handle escaped quotes
          currentValue += '"';
          i++;
        } else {
          // Toggle quote state
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        // End of field
        values.push(currentValue);
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    // Add the last field
    values.push(currentValue);
    
    return {
      id: parseInt(values[0]) || index + 1,
      quote: values[1] || '',
      author: values[2] || '',
      role: values[3] || '',
      rating: parseInt(values[4]) || 5,
      featured: values[5] === 'true',
      date: values[6] || new Date().toISOString().split('T')[0]
    };
  }).filter(review => review.quote && review.author); // Filter out invalid rows
};
