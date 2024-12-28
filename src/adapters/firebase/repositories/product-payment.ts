import { ProductPaymentModel } from '@/domain/models/product-payment'
import { GenericFirebaseRepository } from './generic'
import { ListProductPaymentDTO } from '@/domain/dtos/product-payment/response/list'

export class ProductPaymentRepository extends GenericFirebaseRepository<
  ListProductPaymentDTO,
  ProductPaymentModel
> {
  constructor() {
    super('product-payment')
  }
}
