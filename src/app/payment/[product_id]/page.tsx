import React from 'react'
import { createPreference, getProduct } from './actions'
import MercadoPagoWallet from '@/components/integrations/mercado-pago-wallet'
import ImgCarousel from '@/components/ui/img-carousel/img-carousel'
import { currencyFormatter } from '@/utils/formatters'

interface PaymentPageProps {
  params: { product_id: string }
}

const PaymentPage: React.FC<PaymentPageProps> = async ({
  params: { product_id },
}) => {
  const product = await getProduct(product_id)
  const preferenceId = await createPreference(product)
  return (
    <div className="my-auto flex h-[95vh] w-[95%] flex-col items-center gap-2 overflow-auto rounded bg-white p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="h-[400px] w-full p-2">
        {product.imgs_urls ? (
          <ImgCarousel imageUrls={product.imgs_urls} alt={product.name} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}
      </div>
      {product.description ? (
        <p className="pl-2 pr-2 text-center text-sm">{product.description}</p>
      ) : null}
      <span className="font-bold">
        {currencyFormatter.format(product.max_price)}
      </span>
      <MercadoPagoWallet preferenceId={preferenceId} />
    </div>
  )
}

export default PaymentPage
