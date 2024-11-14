'use client'
import { initMercadoPagoClientSideSdk } from '@/infra/mercado-pago'
import { Wallet } from '@mercadopago/sdk-react'
import React, { useEffect } from 'react'

interface PaymentFormProps {
  preferenceId: string
}

const PaymentForm: React.FC<PaymentFormProps> = ({ preferenceId }) => {
  useEffect(() => {
    initMercadoPagoClientSideSdk()
  }, [])

  return (
    <Wallet
      initialization={{ preferenceId }}
      customization={{ texts: { valueProp: 'smart_option' } }}
    />
  )
}

export default PaymentForm
