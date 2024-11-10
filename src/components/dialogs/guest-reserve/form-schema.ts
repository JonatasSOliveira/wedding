import { z } from 'zod'

export const guestReserveFormSchema = z.object({
  guest_id: z.string({ required_error: 'Selecione um convidado' }),
})

export type GuestReserveForm = z.infer<typeof guestReserveFormSchema>
