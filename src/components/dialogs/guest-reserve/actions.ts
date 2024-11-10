'use server'

import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { GuestService } from '@/application/services/guests'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestRole } from '@/domain/enums/guest-type'

export async function getGuests(guestRole: GuestRole): Promise<ListGuestDTO[]> {
  const guestService = new GuestService(new FirebaseGuestAdapter())
  return await guestService.list({ role: guestRole })
}
