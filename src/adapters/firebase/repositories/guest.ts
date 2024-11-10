import { CreateGuestDTO } from '@/domain/dtos/guest/request/create'
import { GenericFirebaseRepository } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'

export class GuestRepository extends GenericFirebaseRepository<
  CreateGuestDTO,
  ListGuestDTO,
  GuestModel
> {
  constructor() {
    super('guests')
  }
}
