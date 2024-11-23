import { GuestRole } from '@/domain/enums/guest-type'
import { z } from 'zod'

export const guestFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .max(100, { message: 'O nome não pode ter mais que 100 caracteres' }),

  email: z
    .string()
    .optional()
    .refine((value) => !value || /^\S+@\S+\.\S+$/.test(value), {
      message: 'Email inválido',
    }),

  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\+?[1-9]\d{1,14}$/.test(value), {
      message: 'Número de telefone inválido',
    }),

  role: z
    .nativeEnum(GuestRole, {
      message: 'Escolha uma opção válida',
    })
    .refine((value) => Object.values(GuestRole).includes(value), {
      message: 'Função do convidado inválida',
    }),
})

export type GuestFormSchema = z.infer<typeof guestFormSchema>
