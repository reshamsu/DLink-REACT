import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jviwbzeobqpigeounteu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2aXdiemVvYnFwaWdlb3VudGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NDg5MTIsImV4cCI6MjA3MDMyNDkxMn0.XCC37CMV2K4QxuLNyh4ZW8hbAM5VEedEXMhS967lGUQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
