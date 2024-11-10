import { CreateProductDTO } from '@/domain/dtos/product/request/create'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { ProductModel } from '@/domain/models/product'
import { ProductPort } from '@/domain/ports/product'
import { GenericService } from './generic'

export class ProductService
  extends GenericService<CreateProductDTO, ListProductDTO, ProductModel>
  implements ProductPort {}
