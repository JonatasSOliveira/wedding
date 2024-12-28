import { ProductPort } from '@/domain/ports/product'
import { ProductRepository } from './repositories/product'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ProductModel } from '@/domain/models/product'
import { FirebaseGenericAdapter } from './generic'

export class FirebaseProductAdapter
  extends FirebaseGenericAdapter<ListProductDTO, ProductModel>
  implements ProductPort
{
  constructor() {
    super(new ProductRepository())
  }
}
