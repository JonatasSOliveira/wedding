import { GenericFirebaseRepository } from './generic'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'
import { GuestModel } from '@/domain/models/guest'

export class GuestRepository extends GenericFirebaseRepository<
  ListGuestDTO,
  GuestModel
> {
  constructor() {
    super('guests')
  }
}
