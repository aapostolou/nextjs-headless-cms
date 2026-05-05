import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'Must be a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(32, { message: 'Password cannot exceed 32 characters' }),
})

export type LoginFormData = z.infer<typeof loginSchema>
