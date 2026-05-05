'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { LoadingSpinner } from '@/components/loading-spinner'
import { loginWithCredentials } from '@/supabase/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { LoginFormData, loginSchema } from './validation'

export type LoginFormProps = {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    setLoading(true)
    loginWithCredentials(data)
      .then((result) => console.log(result))
      .finally(() => setLoading(false))
  }

  const hasErrors = !!Object.keys(errors).length

  return (
    <>
      <LoadingSpinner isLoading={loading} />
      <Container maxWidth="xs">
        <Paper sx={{ p: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{ alignSelf: 'center' }}
              >
                Admin Login Form
              </Typography>
              <TextField
                {...register('email')}
                label="Email"
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
              <TextField
                {...register('password')}
                label="Password"
                type="password"
                error={!!errors?.password}
                helperText={errors?.password?.message}
              />
              <Button variant="contained" type="submit" disabled={hasErrors}>
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default LoginForm
