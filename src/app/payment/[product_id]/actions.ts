'use server'

import { ServicesContainer } from '@/application/services'
import { ListProductDTO } from '@/domain/dtos/product/response/list'

export async function getProduct(productId: string): Promise<ListProductDTO> {
  return await ServicesContainer.getProductService().get({ id: productId })
}

export async function createProductPayment(
  product: ListProductDTO,
  guestName: string,
): Promise<string> {
  return await ServicesContainer.getProductPaymentService().create({
    productId: product.id,
    price: product.maxPrice,
    guestName,
  })
}

export async function createPreference(
  product: ListProductDTO,
  guestName: string,
  productPaymentId: string,
): Promise<string> {
  return await ServicesContainer.getMercadoPagoService().createPreference(
    product,
    guestName,
    productPaymentId,
  )
}
