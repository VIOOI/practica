import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ashwrraqigmhblzkrcos.supabase.co'
const service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHdycmFxaWdtaGJsemtyY29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzU5MTQ3NiwiZXhwIjoxOTY5MTY3NDc2fQ.qKrl1PHc2UdsjAZws2xRg_gIBFOkWw6id_KEe7cbugc'
export const supabase = createClient(supabaseUrl, service_key)

