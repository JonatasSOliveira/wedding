'use server'

import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { getSession } from '@/lib/auth'
import { ProductFormSchema } from '../form-schema'
import { ServicesContainer } from '@/application/services'

export async function getProduct(id: string): Promise<ListProductDTO> {
  return await ServicesContainer.getProductService().get(
    { id },
    await getSession(),
  )
}

export async function updateProduct(
  id: string,
  productData: ProductFormSchema,
): Promise<void> {
  await ServicesContainer.getProductService().update(
    id,
    { ...productData },
    await getSession(),
  )
}
