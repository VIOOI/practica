import { createClient } from '@supabase/supabase-js'

console.log( process.env )

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NTI4MjQ4NCwiZXhwIjoxOTcwODU4NDg0fQ.T4sTW5U071Co7NG0bfhu9Niexeoojk0N5xn-iIUdfP8'
// export const supabase = createClient(supabaseUrl, service_key)
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

