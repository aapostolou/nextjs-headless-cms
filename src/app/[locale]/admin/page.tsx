import { LoginForm } from '@/components/admin-panel/login-form'

import { LogoutButton } from './LogoutButton'

export default async function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <LoginForm />
      <LogoutButton />
    </div>
  )
}
