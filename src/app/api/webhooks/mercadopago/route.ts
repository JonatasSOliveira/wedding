import { NextRequest } from 'next/server'

export async function GET() {
  return Response.json({ hello: 'world' })
}

export async function POST(request: NextRequest) {
  console.log('[WEBHOOKS - MERCADOPAGO] Request Body', request.body)
  return Response.json({ status: 200 })
}
