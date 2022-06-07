import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
// const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDI0OTUwMCwiZXhwIjoxOTY5ODI1NTAwfQ.wEKnTzak9V2nYUk7cPjiEGr2up7AegKdDkSUG25PvVs'
// export const supabase = createClient(supabaseUrl, service_key)
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

