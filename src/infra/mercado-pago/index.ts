import { initMercadoPago } from '@mercadopago/sdk-react'
import { MercadoPagoConfig, Preference } from 'mercadopago'

export class MercadoPagoClientService {
  private static sdkAlreadyInitialized = false

  public static initSdk(): void {
    if (MercadoPagoClientService.sdkAlreadyInitialized) {
      console.log('Mercado Pago já iniciado')
      return
    }
    if (!process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY) {
      throw new Error('Mercado Pago public key is undefined')
    }
    console.log('Mercado Pago Iniciado')
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY, {
      locale: 'pt-BR',
    })
    MercadoPagoClientService.sdkAlreadyInitialized = true
  }
}

export class MercadoPagoBackendContainer {
  private static client: MercadoPagoConfig
  private static preference: Preference

  public static getClient(): MercadoPagoConfig {
    if (!MercadoPagoBackendContainer.client) {
      this.client = new MercadoPagoConfig({
        accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
        options: { timeout: 5000, idempotencyKey: 'abc' },
      })
    }
    return MercadoPagoBackendContainer.client
  }

  public static getPreference(): Preference {
    if (!MercadoPagoBackendContainer.preference) {
      this.preference = new Preference(MercadoPagoBackendContainer.getClient())
    }
    return MercadoPagoBackendContainer.preference
  }
}
