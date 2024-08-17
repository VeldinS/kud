import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iuabsbrilpyfeoswppwd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YWJzYnJpbHB5ZmVvc3dwcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMDY5MzcsImV4cCI6MjAzODc4MjkzN30.GDebfcNNazr05hRJbXgHGLXXFy9jO-7gmLZImPy8tEw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('Connected successfully to database!');

