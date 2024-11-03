import { ProductModel } from '@/domain/models/product'

export interface CreateProductDTO
  extends Pick<
    ProductModel,
    'description' | 'min_price' | 'max_price' | 'imgs_urls' | 'disponibility'
  > {}
