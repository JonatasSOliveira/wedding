import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { CreateProductDTO } from '@/domain/dtos/product/request/create'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ModelQuery } from '@/domain/model-querying'
import { ProductModel } from '@/domain/models/product'
import { ProductPort } from '@/domain/ports/product'

export class ProductService implements ProductPort {
  constructor(private readonly adapter: ProductPort) {}

  public async create(
    createDTO: CreateProductDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.adapter.create(createDTO, user)
  }

  public async list(
    user: AuthenticatedUserResponseDTO,
    query?: ModelQuery<ProductModel> | undefined,
  ): Promise<ListProductDTO[]> {
    return this.adapter.list(user, query)
  }
}
