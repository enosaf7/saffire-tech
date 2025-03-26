
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials are missing! Make sure to set the environment variables.');
}

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

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
