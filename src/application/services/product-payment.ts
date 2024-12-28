import { CreateProductPaymentDTO } from '@/domain/dtos/product-payment/request/create'
import { GenericService } from './generic'
import { ListProductPaymentDTO } from '@/domain/dtos/product-payment/response/list'
import { ProductPaymentModel } from '@/domain/models/product-payment'
import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { PaymentStatus } from '@/domain/enums/payment-status'
import { ProductPaymentPort } from '@/domain/ports/product-payment'

export class ProductPaymentService
  extends GenericService<
    CreateProductPaymentDTO,
    ListProductPaymentDTO,
    ProductPaymentModel
  >
  implements ProductPaymentPort
{
  public create(
    createDTO: CreateProductPaymentDTO,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<string> {
    const createDTOWithStatus: Partial<ProductPaymentModel> = {
      ...createDTO,
      status: PaymentStatus.PENDING,
    }
    return this.adapter.create(createDTOWithStatus, user)
  }

  public async updateStatus(id: string, status: PaymentStatus): Promise<void> {
    return await this.adapter.update(id, { status })
  }
}
