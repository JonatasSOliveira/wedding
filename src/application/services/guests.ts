import { CreateGuestDTO } from '@/domain/dtos/guest/request/create'
import { GenericService } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'
import { GuestPort } from '@/domain/ports/guest'
import { ReservationDTO } from '@/domain/dtos/guest/request/reserve'

export class GuestService
  extends GenericService<CreateGuestDTO, ListGuestDTO, GuestModel>
  implements GuestPort {

  constructor(protected readonly adapter: GuestPort) {
    super(adapter)
  }

  public async reserve(reservation: ReservationDTO): Promise<void> {
    await this.adapter.reserve(reservation)
  }
}
