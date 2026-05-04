import 'server-only'

import postgres from 'postgres'

const connectionString = process.env.SUPABASE_CONNECTION_STRING as string
export const sql = postgres(connectionString)
