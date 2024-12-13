'use server'

import { GuestFormSchema } from '../form-schema'
import { getSession } from '@/lib/auth'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { ServicesContainer } from '@/application/services'

export async function getGuest(id: string): Promise<ListGuestDTO> {
  return await ServicesContainer.getGuestService().get({ id })
}

export async function updateGuest(
  id: string,
  guestData: GuestFormSchema,
): Promise<void> {
  await ServicesContainer.getGuestService().update(
    id,
    { ...guestData },
    await getSession(),
  )
}
