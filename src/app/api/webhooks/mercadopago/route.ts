import { ServicesContainer } from '@/application/services'
import { MERCADO_PAGO_EVENTS } from '@/domain/ports/mercado-pago'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return Response.json({ hello: 'world' })
}

export async function POST(request: NextRequest) {
  const eventType: MERCADO_PAGO_EVENTS | undefined =
    (request.nextUrl.searchParams.get('type') as MERCADO_PAGO_EVENTS) ||
    undefined
  const externalReference: string | undefined =
    request.nextUrl.searchParams.get('external_reference') || undefined

  if (!eventType) {
    console.error('[WEBHOOK - Mercado Pago] Event type not informed')
    return NextResponse.json(
      { error: 'Event type not informed' },
      { status: 400 },
    )
  }

  try {
    ServicesContainer.getMercadoPagoService().handleWebhookNotification(
      eventType,
      externalReference,
    )
  } catch (error) {
    console.error(`[WEBHOOK - Mercado Pago] ${error}`)
    return NextResponse.json({ error }, { status: 400 })
  }

  return NextResponse.json({})
}
