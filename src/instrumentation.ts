// https://nextjs.org/docs/app/guides/instrumentation

import { initializeSupabase } from './supabase/migration'

export function register() {
  initializeSupabase()
}
