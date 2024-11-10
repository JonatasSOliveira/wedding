import { GuestRole } from '../enums/guest-type'
import { BaseModel } from './base'

export interface ProductResevartion {
  reserved_at: string
  product_id: string
}

export interface GuestModel extends BaseModel {
  name: string
  email?: string
  phone?: string
  role: GuestRole
  reservations: ProductResevartion[]
}
