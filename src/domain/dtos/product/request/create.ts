import { ProductModel } from '@/domain/models/product'

export interface CreateProductDTO
  extends Pick<
    ProductModel,
    'description' | 'minPrice' | 'maxPrice' | 'imgsUrls' | 'disponibility'
  > {}
