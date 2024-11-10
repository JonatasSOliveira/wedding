import { GuestModel } from '@/domain/models/guest'

export interface CreateGuestDTO
  extends Pick<GuestModel, 'name' | 'email' | 'phone' | 'role'> {}
