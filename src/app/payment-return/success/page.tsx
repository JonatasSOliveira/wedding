import React from 'react'
import Link from 'next/link'

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-10">
      <div className="min-h-[50%] w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-semibold text-green-600">
          Pagamento realizado com sucesso!
        </h1>
        <p className="mb-4 mt-4 text-lg text-gray-700">
          Obrigado pela sua compra!
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-600"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccessPage
