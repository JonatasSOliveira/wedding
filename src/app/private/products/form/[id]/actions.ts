'use server'

import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { ProductService } from '@/application/services/product'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { getSession } from '@/lib/auth'
import { ProductFormSchema } from '../form-schema'

export async function getProduct(id: string): Promise<ListProductDTO> {
  const session = await getSession()
  const productService = new ProductService(new FirebaseProductAdapter())
  return await productService.get({ id }, session)
}

export async function updateProduct(
  id: string,
  productData: ProductFormSchema,
): Promise<void> {
  const session = await getSession()
  const productService = new ProductService(new FirebaseProductAdapter())
  await productService.update(id, { ...productData }, session)
}
