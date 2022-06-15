import { createClient } from '@supabase/supabase-js'

console.log( process.env )

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyODg4NzUsImV4cCI6MTk3MDg2NDg3NX0.ba9UDmiW6M1Z_8Xu0wqEtNzzU2OC9rr4gWFM997uQY8'
// export const supabase = createClient(supabaseUrl, service_key)
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

