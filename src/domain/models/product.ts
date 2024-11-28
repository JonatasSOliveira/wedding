import { GuestRole } from '../enums/guest-type'
import { BaseModel } from './base'

export interface ProductModel extends BaseModel {
  name: string
  description?: string
  minPrice: number
  maxPrice: number
  imgsUrls?: string[]
  disponibility: GuestRole
}
