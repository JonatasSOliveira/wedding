'use client'

import Input from '@/components/ui/input/input'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import React, { useState } from 'react'
import { createPreference } from './actions'
import MercadoPagoWallet from '@/components/integrations/mercado-pago-wallet'

interface PaymentFormProps {
  product: ListProductDTO
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ product }) => {
  const [guestName, setGuestName] = useState('')
  const [preferenceId, setPreferenceId] = useState('')

  const releasePayment = async () => {
    setPreferenceId(await createPreference(product, guestName))
  }

  return (
    <div>
      <Input
        placeholder="Nome do convidado"
        value={guestName}
        onChange={(event) => setGuestName(event.target.value)}
        disabled={Boolean(preferenceId)}
      />
      <button
        type="button"
        className="rounded bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
        onClick={releasePayment}
        disabled={Boolean(preferenceId)}
      >
        Liberar pagamento
      </button>
      {Boolean(preferenceId) && (
        <MercadoPagoWallet preferenceId={preferenceId} />
      )}
    </div>
  )
}
