import { createClient } from '../client'

export async function loginWithCredentials({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { success: false, error: 'Invalid email or password' }
  }

  return { success: true }
}

export async function logOut() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()
}
