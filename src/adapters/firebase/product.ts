import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { CreateProductDTO } from '@/domain/dtos/product/request/create'
import { ProductPort } from '@/domain/ports/product'
import { ProductRepository } from './repositories/product'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ModelQuery } from '@/domain/model-querying'
import { ProductModel } from '@/domain/models/product'

export class FirebaseProductAdapter implements ProductPort {
  private readonly repository = new ProductRepository()

  public async create(
    createDTO: CreateProductDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.repository.create(createDTO, user)
  }

  public async list(
    user: AuthenticatedUserResponseDTO,
    query?: ModelQuery<ProductModel> | undefined,
  ): Promise<ListProductDTO[]> {
    return this.repository.list(user.id, query)
  }
}
