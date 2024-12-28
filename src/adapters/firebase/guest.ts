import { FirebaseGenericAdapter } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'
import { GuestPort } from '@/domain/ports/guest'
import { GuestRepository } from './repositories/guest'

export class FirebaseGuestAdapter
  extends FirebaseGenericAdapter<ListGuestDTO, GuestModel>
  implements GuestPort
{
  constructor() {
    super(new GuestRepository())
  }
}
