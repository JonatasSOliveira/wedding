'use server'

import { getSession } from '@/lib/auth'
import { GuestFormSchema } from './form-schema'
import { ServicesContainer } from '@/application/services'

export async function createGuest(guestData: GuestFormSchema): Promise<void> {
  await ServicesContainer.getGuestService().create(
    { ...guestData },
    await getSession(),
  )
}
