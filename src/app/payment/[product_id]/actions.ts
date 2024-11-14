'use server'

import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { ProductService } from '@/application/services/product'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { preference } from '@/infra/mercado-pago'

export async function getProduct(productId: string): Promise<ListProductDTO> {
  const productService = new ProductService(new FirebaseProductAdapter())
  return await productService.get({ id: productId })
}

export async function createPreference(
  product: ListProductDTO,
): Promise<string> {
  const initialProjectUrl = process.env.PROJECT_URl
  const productPreference = await preference.create({
    body: {
      back_urls: {
        success: `${initialProjectUrl}/payment-return/success`,
        failure: `${initialProjectUrl}/payment-return/failure`,
      },
      items: [
        {
          id: product.id,
          title: product.name,
          quantity: 1,
          unit_price: product.max_price,
          picture_url: product.imgs_urls?.[0],
        },
      ],
    },
  })
  if (!productPreference.id) throw new Error('Error creating preference')

  return productPreference.id
}
