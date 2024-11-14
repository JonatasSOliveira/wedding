import React from 'react'
import { createPreference, getProduct } from './actions'
import PaymentForm from './form'

interface PaymentPageProps {
  params: { product_id: string }
}

const PaymentPage: React.FC<PaymentPageProps> = async ({
  params: { product_id },
}) => {
  const product = await getProduct(product_id)
  const preferenceId = await createPreference(product)
  return <PaymentForm preferenceId={preferenceId} />
}

export default PaymentPage
