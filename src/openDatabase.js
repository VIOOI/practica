import { createClient } from '@supabase/supabase-js'

console.log( process.env )

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDYwMTY2MiwiZXhwIjoxOTcwMTc3NjYyfQ.luS2XwXF2Qm-FfDlvafBTGYpB2LmX1V2Yszqg4Evjjw'
export const supabase = createClient(supabaseUrl, service_key)
// export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

