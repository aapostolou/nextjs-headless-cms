'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { AuthProviderUser } from '@/constants/types'
import { createClient } from '@/supabase/client'
import { User } from '@supabase/supabase-js'

const supabase = createClient()

const SupabaseAuthContext = createContext<{
  user?: AuthProviderUser | null
}>({
  user: null,
})

export type SupabaseAuthProviderProps = {
  initialUser?: AuthProviderUser | null
  children?: React.ReactNode
}

const SupabaseAuthProvider: React.FC<SupabaseAuthProviderProps> = ({
  initialUser,
  children,
}) => {
  const [user, setUser] = useState<AuthProviderUser | null | undefined>(
    initialUser,
  )

  const getUserWithCmsUserRole = async (user?: User | null) => {
    if (user) {
      const { data: cmsUser } = await supabase
        .from('cms_users')
        .select('role')
        .eq('user_id', user.id)
        .single()

      return { ...user, cms_role: cmsUser?.role }
    }
    return null
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(await getUserWithCmsUserRole(session?.user))
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const value = { user }

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}

export default SupabaseAuthProvider

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext)

  if (!context) {
    throw new Error(
      'useSupabaseAuth must be used within a SupabaseAuthProvider',
    )
  }
  return context
}
