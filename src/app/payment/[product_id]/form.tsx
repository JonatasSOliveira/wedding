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
    <div className="py-2">
      <p className="mb-2 text-center text-sm">
        Informe o nome para liberar o pagamento
      </p>
      <Input
        placeholder="Nome do convidado"
        value={guestName}
        onChange={(event) => setGuestName(event.target.value)}
        disabled={Boolean(preferenceId)}
      />
      <button
        type="button"
        className="flex w-[100%] items-center justify-center gap-2 rounded bg-primary-blue px-4 py-2 text-center font-bold text-white hover:bg-secondary-darkBlue disabled:bg-neutral-mediumGray disabled:text-neutral-lightGray"
        onClick={releasePayment}
        disabled={Boolean(preferenceId) || guestName?.length < 3}
      >
        Liberar pagamento
      </button>
      {Boolean(preferenceId) && (
        <MercadoPagoWallet preferenceId={preferenceId} />
      )}
    </div>
  )
}
