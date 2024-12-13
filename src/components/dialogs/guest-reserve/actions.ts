'use server'

import { ServicesContainer } from '@/application/services'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestRole } from '@/domain/enums/guest-type'

export async function getGuests(guestRole: GuestRole): Promise<ListGuestDTO[]> {
  return await ServicesContainer.getGuestService().list({ role: guestRole })
}
