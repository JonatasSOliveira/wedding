import { CreateGuestDTO } from '../dtos/guest/request/create'
import { ReservationDTO } from '../dtos/guest/request/reserve'
import { ListGuestDTO } from '../dtos/guest/response/list'
import { GuestModel } from '../models/guest'
import { GenericCrudPort } from './generic-crud'

export interface GuestPort
  extends GenericCrudPort<CreateGuestDTO, ListGuestDTO, GuestModel> {
  reserve(reservation: ReservationDTO): Promise<void>
}
