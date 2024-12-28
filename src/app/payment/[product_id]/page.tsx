import React from 'react'
import { getProduct } from './actions'
import ImgCarousel from '@/components/ui/img-carousel/img-carousel'
import { currencyFormatter } from '@/utils/formatters'
import { PaymentForm } from './form'

interface PaymentPageProps {
  params: { product_id: string }
}

const PaymentPage: React.FC<PaymentPageProps> = async ({
  params: { product_id },
}) => {
  const product = await getProduct(product_id)
  return (
    <div className="flex flex-1 flex-col items-center gap-1 overflow-auto rounded bg-neutral-lightGray p-4">
      <h1 className="text-center text-2xl font-bold text-secondary-darkBlue">
        {product.name}
      </h1>
      <div className="h-[400px] w-full p-2">
        {product.imgsUrls ? (
          <ImgCarousel imageUrls={product.imgsUrls} alt={product.name} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}
      </div>
      {product.description ? (
        <p className="pl-2 pr-2 text-center text-sm text-secondary-darkBlue">
          {product.description}
        </p>
      ) : null}
      <span className="font-bold">
        {currencyFormatter.format(product.maxPrice)}
      </span>
      <PaymentForm product={product} />
    </div>
  )
}

export default PaymentPage
