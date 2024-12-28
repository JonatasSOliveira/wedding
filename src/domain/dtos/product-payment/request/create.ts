import { ProductPaymentModel } from '@/domain/models/product-payment'

export interface CreateProductPaymentDTO
  extends Pick<ProductPaymentModel, 'productId' | 'guestName' | 'price'> {}
