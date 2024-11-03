import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { CreateProductDTO } from '@/domain/dtos/product/request/create'
import { ProductPort } from '@/domain/ports/product'

export class ProductService implements ProductPort {
  constructor(private readonly adapter: ProductPort) {}

  public async create(
    createDTO: CreateProductDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.adapter.create(createDTO, user)
  }
}
