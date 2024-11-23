'use server'

import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { GuestService } from '@/application/services/guests'
import { GuestFormSchema } from '../form-schema'
import { getSession } from '@/lib/auth'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'

export async function getGuest(id: string): Promise<ListGuestDTO> {
  const guestService = new GuestService(new FirebaseGuestAdapter())
  return await guestService.get({ id })
}

export async function updateGuest(
  id: string,
  guestData: GuestFormSchema,
): Promise<void> {
  const session = await getSession()
  const guestService = new GuestService(new FirebaseGuestAdapter())
  await guestService.update(id, { ...guestData }, session)
}
