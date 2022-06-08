import { createClient } from '@supabase/supabase-js'

console.log( process.env )

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDYxMzQyMSwiZXhwIjoxOTcwMTg5NDIxfQ.D9DPhvqPUA4t4u7CgjzggIzyQzm7uAG_mYIvXyz_Fj4'
export const supabase = createClient(supabaseUrl, service_key)
// export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

