import { createClient } from "@supabase/supabase-js";

// Supabase client for server-side operations
// Using service role key to bypass RLS for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceKey) {
  // Only warn during build, error at runtime
  if (typeof window === "undefined" && process.env.NODE_ENV !== "production") {
    console.warn(
      "⚠️  Missing Supabase environment variables. Please create .env.local file."
    );
    console.warn("   See .env.example for required variables.");
  }
}

export const supabaseAdmin = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseServiceKey || "placeholder-key",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Type definitions matching database schema
export interface ContactSubmission {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  child_age?: string;
  message: string;
  ip_address?: string;
  user_agent?: string;
}

export interface VisitBooking {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  child_name?: string;
  child_age: string;
  current_school?: string;
  preferred_date: string;
  preferred_time: string;
  adults_attending: number;
  special_requirements?: string;
  ip_address?: string;
  user_agent?: string;
}
