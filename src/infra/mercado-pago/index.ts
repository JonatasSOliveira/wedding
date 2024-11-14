import { initMercadoPago } from '@mercadopago/sdk-react'
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago'

export const initMercadoPagoClientSideSdk = () => {
  if (process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY === undefined) {
    throw new Error('Mercado Pago public key is undefined')
  }
  console.log('Mercado Pago Iniciado')
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY, { locale: 'pt-BR' })
}

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
  options: { timeout: 5000, idempotencyKey: 'abc' },
})

export const payment = new Payment(client)
export const preference = new Preference(client)
