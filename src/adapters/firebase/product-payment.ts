import { FirebaseGenericAdapter } from './generic'
import { ListProductPaymentDTO } from '@/domain/dtos/product-payment/response/list'
import { ProductPaymentModel } from '@/domain/models/product-payment'
import { ProductPaymentRepository } from './repositories/product-payment'
import { ProductPaymentPort } from '@/domain/ports/product-payment'
import { PaymentStatus } from '@/domain/enums/payment-status'

export class FirebaseProductPaymentAdapter
  extends FirebaseGenericAdapter<ListProductPaymentDTO, ProductPaymentModel>
  implements ProductPaymentPort
{
  constructor() {
    super(new ProductPaymentRepository())
  }

  public async updateStatus(id: string, status: PaymentStatus): Promise<void> {
    return await this.repository.update(id, { status })
  }
}
