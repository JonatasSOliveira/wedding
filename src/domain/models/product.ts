import { GuestRole } from '../enums/guest-type'
import { BaseModel } from './base'

export interface ProductModel extends BaseModel {
  name: string
  description?: string
  min_price: number
  max_price: number
  imgs_urls?: string[]
  disponibility: GuestRole
}
