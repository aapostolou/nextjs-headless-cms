'use server'

import { createClient } from '@/supabase/server'

import SupabaseAuthProvider from './SupabaseAuthProvider'

export type SupabaseAuthProviderWrapperProps = { children: React.ReactNode }

const SupabaseAuthProviderWrapper: React.FC<
  SupabaseAuthProviderWrapperProps
> = async ({ children }) => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: cmsUser } = await supabase
    .from('cms_users')
    .select('role')
    .eq('user_id', user?.id)
    .single()

  const role = cmsUser?.role

  const initialUser = user && { ...user, cms_role: role }

  return (
    <SupabaseAuthProvider initialUser={initialUser}>
      {children}
    </SupabaseAuthProvider>
  )
}

export default SupabaseAuthProviderWrapper
