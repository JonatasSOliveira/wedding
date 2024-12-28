import { GenericCrudPort } from './generic-crud'
import { ListProductDTO } from '../dtos/product/response/list'
import { ProductModel } from '../models/product'

export interface ProductPort
  extends GenericCrudPort<ListProductDTO, ProductModel> {}
