'use client'
import { MercadoPagoClientService } from '@/infra/mercado-pago'
import { Wallet } from '@mercadopago/sdk-react'
import React, { useEffect } from 'react'

interface MercadoPagoWalletProps {
  preferenceId: string
}

const MercadoPagoWallet: React.FC<MercadoPagoWalletProps> = ({
  preferenceId,
}) => {
  useEffect(() => {
    MercadoPagoClientService.initSdk()
  }, [])

  return (
    <Wallet
      initialization={{ preferenceId }}
      customization={{ texts: { valueProp: 'smart_option' } }}
    />
  )
}

export default MercadoPagoWallet
