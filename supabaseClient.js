// supabaseClient.js
const SUPABASE_URL = 'https://rybwjbrtjkzyknvdxpjy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5YndqYnJ0amt6eWtudmR4cGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NzM1OTYsImV4cCI6MjA5MDI0OTU5Nn0.2oAwiBnT82vskcK7NpkUvdozAZD-qjZ4_3ZdKUpoyuk';

// Initialize the global Supabase client for Vanilla JS
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
