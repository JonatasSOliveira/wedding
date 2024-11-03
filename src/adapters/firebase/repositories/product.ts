import { GenericFirebaseRepository } from './generic'
import { CreateProductDTO } from '@/domain/dtos/product/request/create'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ProductModel } from '@/domain/models/product'

export class ProductRepository extends GenericFirebaseRepository<
  CreateProductDTO,
  ListProductDTO,
  ProductModel
> {
  constructor() {
    super('products')
  }
}
