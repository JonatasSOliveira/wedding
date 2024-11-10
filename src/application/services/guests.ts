import { CreateGuestDTO } from '@/domain/dtos/guest/request/create'
import { GenericService } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'
import { GuestPort } from '@/domain/ports/guest'

export class GuestService
  extends GenericService<CreateGuestDTO, ListGuestDTO, GuestModel>
  implements GuestPort {}
