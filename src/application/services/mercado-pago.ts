import { ListProductDTO } from '@/domain/dtos/product/response/list'
import {
  MERCADO_PAGO_EVENTS,
  MercadoPagoPort,
} from '@/domain/ports/mercado-pago'
import { MercadoPagoBackendContainer } from '@/infra/mercado-pago'
import { ProductPaymentService } from './product-payment'
import { FirebaseProductPaymentAdapter } from '@/adapters/firebase/product-payment'
import { PaymentStatus } from '@/domain/enums/payment-status'

export class MercadoPagoService implements MercadoPagoPort {
  public async createPreference(
    product: ListProductDTO,
    guestName: string,
    productPaymentId: string,
  ): Promise<string> {
    const initialProjectUrl = process.env.PROJECT_URl
    const notificationUrl = `https://milnatas.vercel.app/api/webhooks/mercadopago?source_news=webhooks&external_reference=${productPaymentId}`
    const productPreference =
      await MercadoPagoBackendContainer.getPreference().create({
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
          notification_url: notificationUrl,
          payer: {
            name: guestName,
          },
          auto_return: 'all',
          external_reference: productPaymentId,
        },
      })

    if (!productPreference.id) throw new Error('Error creating preference')

    console.log(
      '[PAYMENT - CREATE PREFERENCE] NotificationUrl',
      notificationUrl,
    )
    console.log(
      '[PAYMENT - CREATE PREFERENCE] PreferenceId',
      productPreference.id,
    )
    return productPreference.id
  }

  public async handleWebhookNotification(
    eventType: MERCADO_PAGO_EVENTS,
    externalReference?: string,
  ): Promise<void> {
    switch (eventType) {
      case MERCADO_PAGO_EVENTS.PAYMENT:
        if (!externalReference) {
          throw new Error(
            '[MercadoPagoService] External reference not informed',
          )
        }

        await new ProductPaymentService(
          new FirebaseProductPaymentAdapter(),
        ).updateStatus(externalReference, PaymentStatus.APPROVED)

        break
      default:
        console.log('[MercadoPagoService] Unhandled event')
        break
    }
  }
}
