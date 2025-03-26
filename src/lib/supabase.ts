
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
