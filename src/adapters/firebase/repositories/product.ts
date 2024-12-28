import { GenericFirebaseRepository } from './generic'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ProductModel } from '@/domain/models/product'

export class ProductRepository extends GenericFirebaseRepository<
  ListProductDTO,
  ProductModel
> {
  constructor() {
    super('products')
  }
}
