'use server'

import { getSession } from '@/lib/auth'
import { GuestFormSchema } from './form-schema'
import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { GuestService } from '@/application/services/guests'

export async function createGuest(guestData: GuestFormSchema): Promise<void> {
  const session = await getSession()
  const guestService = new GuestService(new FirebaseGuestAdapter())
  await guestService.create({ ...guestData }, session)
}
