import { createClient } from '@supabase/supabase-js'


const URL = 'https://rwcvzqvkycvftgrtvedx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3Y3Z6cXZreWN2ZnRncnR2ZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTMwOTMsImV4cCI6MjA2MTE4OTA5M30.HwmUyZ_eqqLdDvSyUkgBjwM_qh2A-amDdvwNPdEtApY';

export const supabase = createClient(URL, API_KEY);
