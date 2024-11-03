import { z } from 'zod'

export const authSignUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type AuthSignUpFormData = z.infer<typeof authSignUpFormSchema>
