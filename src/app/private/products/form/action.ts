'use server'

import { ProductFormSchema } from './form-schema'
import { getSession } from '@/lib/auth'
import { ServicesContainer } from '@/application/services'

export async function createProduct(
  productData: ProductFormSchema,
): Promise<void> {
  await ServicesContainer.getProductService().create(
    { ...productData },
    await getSession(),
  )
}
