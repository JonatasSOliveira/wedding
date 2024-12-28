import { ListProductDTO } from '../dtos/product/response/list'

export enum MERCADO_PAGO_EVENTS {
  PAYMENT = 'payment',
  SUBSCRIPTION_AUTHORIZED_PAYMENT = 'subscription_authorized_payment',
  SUBSCRIPTION_PREAPPROVAL = 'subscription_preapproval',
  SUBSCRIPTION_PREAPPROVAL_PLAN = 'subscription_preapproval_plan',
  MP_CONNECT = 'mp-connect',
  WALLET_CONNECT = 'wallet_connect',
  STOP_DELIVERY_OP_WH = 'stop_delivery_op_wh',
  TOPIC_CLAIMS_INTEGRATION_WH = 'topic_claims_integration_wh',
  TOPIC_CARD_ID_WH = 'topic_card_id_wh',
  TOPIC_MERCHANT_ORDER_WH = 'topic_merchant_order_wh',
  TOPIC_CHARGEBACKS_WH = 'topic_chargebacks_wh',
  POINT_INTEGRATION_WH = 'point_integration_wh',
}

export interface MercadoPagoPort {
  createPreference(
    product: ListProductDTO,
    guestName: string,
    productPaymentId: string,
  ): Promise<string>

  handleWebhookNotification(
    eventType: MERCADO_PAGO_EVENTS,
    externalReference?: string,
  ): Promise<void>
}
