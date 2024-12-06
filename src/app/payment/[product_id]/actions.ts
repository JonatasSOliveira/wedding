'use server'

import { ServicesContainer } from '@/application/services'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { MercadoPagoService } from '@/infra/mercado-pago'

export async function getProduct(productId: string): Promise<ListProductDTO> {
  return await ServicesContainer.getProductService().get({ id: productId })
}

export async function createPreference(
  product: ListProductDTO,
  guestName: string,
): Promise<string> {
  const initialProjectUrl = process.env.PROJECT_URl
  const productPreference = await MercadoPagoService.getPreference().create({
    body: {
      back_urls: {
        success: `${initialProjectUrl}/payment-return/success?guestName=${guestName}&productId=${product.id}`,
        failure: `${initialProjectUrl}/payment-return/failure`,
      },
      items: [
        {
          id: product.id,
          title: product.name,
          quantity: 1,
          unit_price: product.maxPrice,
          picture_url: product.imgsUrls?.[0],
        },
      ],
    },
  })
  if (!productPreference.id) throw new Error('Error creating preference')

  return productPreference.id
}
