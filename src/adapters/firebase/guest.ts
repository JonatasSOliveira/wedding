import { CreateGuestDTO } from '@/domain/dtos/guest/request/create'
import { FirebaseGenericAdapter } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'
import { GuestPort } from '@/domain/ports/guest'
import { GuestRepository } from './repositories/guest'
import { ReservationDTO } from '@/domain/dtos/guest/request/reserve'

export class FirebaseGuestAdapter
  extends FirebaseGenericAdapter<CreateGuestDTO, ListGuestDTO, GuestModel>
  implements GuestPort
{
  constructor() {
    super(new GuestRepository())
  }

  public async reserve(reservation: ReservationDTO): Promise<void> {
    // TODO: Impl it
    console.log(reservation)
  }
}
