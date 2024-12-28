import { ListGuestDTO } from '../dtos/guest/response/list'
import { GuestModel } from '../models/guest'
import { GenericCrudPort } from './generic-crud'

export interface GuestPort extends GenericCrudPort<ListGuestDTO, GuestModel> {}
