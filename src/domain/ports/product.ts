import { GenericCrudPort } from './generic-crud'
import { CreateProductDTO } from '../dtos/product/request/create'

export interface ProductPort extends GenericCrudPort<CreateProductDTO> {}
