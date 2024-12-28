import { ListProductPaymentDTO } from '../dtos/product-payment/response/list'
import { PaymentStatus } from '../enums/payment-status'
import { ProductPaymentModel } from '../models/product-payment'
import { GenericCrudPort } from './generic-crud'

export interface ProductPaymentPort
  extends GenericCrudPort<ListProductPaymentDTO, ProductPaymentModel> {
  updateStatus(id: string, status: PaymentStatus): Promise<void>
}
