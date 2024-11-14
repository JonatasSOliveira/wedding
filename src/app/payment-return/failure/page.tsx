import Link from 'next/link'
import React from 'react'

const PaymentErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-semibold text-red-600">
          Ocorreu um erro no pagamento!
        </h1>
        <p className="mb-4 mt-4 text-lg text-gray-700">
          Infelizmente, não conseguimos processar seu pagamento. Tente novamente
          mais tarde.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-600"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}

export default PaymentErrorPage
