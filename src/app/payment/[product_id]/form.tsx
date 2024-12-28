'use client'

import Input from '@/components/ui/input/input'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import React, { useState, useTransition } from 'react'
import { createPreference, createProductPayment } from './actions'
import MercadoPagoWallet from '@/components/integrations/mercado-pago-wallet'

interface PaymentFormProps {
  product: ListProductDTO
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ product }) => {
  const [guestName, setGuestName] = useState('')
  const [preferenceId, setPreferenceId] = useState('')
  const [isPending, startTransition] = useTransition()

  const releasePayment = async () => {
    startTransition(async () => {
      const productPaymentId = await createProductPayment(product, guestName)
      setPreferenceId(
        await createPreference(product, guestName, productPaymentId),
      )
    })
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
        {isPending ? 'Carregando...' : 'Liberar pagamento'}
      </button>
      {Boolean(preferenceId) && (
        <MercadoPagoWallet preferenceId={preferenceId} />
      )}
    </div>
  )
}
