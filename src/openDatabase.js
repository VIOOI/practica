import { createClient } from '@supabase/supabase-js'

console.log( process.env )

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDY4ODAyMywiZXhwIjoxOTcwMjY0MDIzfQ.RNwn35FXR3rqx2ZK9zG-ow1Gwv7gwCRiZsgK9u4vL_A'
// export const supabase = createClient(supabaseUrl, service_key)
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

