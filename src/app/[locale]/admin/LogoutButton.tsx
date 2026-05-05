'use client'

import { logOut } from '@/supabase/services/auth'
import Button from '@mui/material/Button'

export const LogoutButton: React.FC = () => {
  return (
    <Button variant="contained" color="error" onClick={logOut}>
      Logout
    </Button>
  )
}
