import { GuestRole } from '@/domain/enums/guest-type'
import { z } from 'zod'

export const productFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
    description: z.string().optional(),
    minPrice: z
      .string()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val), {
        message: 'Preço mínimo deve ser um número',
      }),
    maxPrice: z
      .string()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val), {
        message: 'Preço máximo deve ser um número',
      }),
    imgsUrls: z
      .array(z.string().url({ message: 'Cada URL deve ser um link válido' }))
      .optional(),
    disponibility: z.nativeEnum(GuestRole, {
      message: 'Escolha uma opção válida',
    }),
  })
  .refine((data) => data.maxPrice >= data.minPrice, {
    message: 'O preço máximo deve ser maior ou igual ao preço mínimo',
    path: ['max_price'],
  })

export type ProductFormSchema = z.infer<typeof productFormSchema>
