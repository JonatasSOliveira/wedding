import { PaymentStatus } from '../enums/payment-status'
import { BaseModel } from './base'

export interface ProductPaymentModel extends BaseModel {
  productId: string
  guestName: string
  status: PaymentStatus
  price: number
}
