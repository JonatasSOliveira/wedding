import { GenericCrudPort } from './generic-crud'
import { CreateProductDTO } from '../dtos/product/request/create'
import { ListProductDTO } from '../dtos/product/response/list'
import { ProductModel } from '../models/product'

export interface ProductPort
  extends GenericCrudPort<CreateProductDTO, ListProductDTO, ProductModel> {}
