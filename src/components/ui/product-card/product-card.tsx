import React from 'react'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { GuestRole } from '@/domain/enums/guest-type'
import Link from 'next/link'
import ImgCarousel from '../img-carousel/img-carousel'
import { currencyFormatter } from '@/utils/formatters'
import { Icon } from '@iconify/react';

interface ProductCardProps {
  product: ListProductDTO
  guestRole: GuestRole
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center rounded-md">
        {product.imgsUrls && product.imgsUrls.length > 0 ? (
          <ImgCarousel imageUrls={product.imgsUrls} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col space-y-1">
        <h2 className="line-clamp-2 text-lg font-semibold">{product.name}</h2>
        <div className="text-sm text-gray-700">
          <span className="font-bold">
            {currencyFormatter.format(product.maxPrice)}
          </span>
        </div>

        <Link
          className="rounded bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700 flex items-center justify-center gap-4"
          href={`/payment/${product.id}`}
        >
          <Icon icon="ant-design:gift-twotone" color='#fff' /> Presentear
        </Link>
      </div>
    </div>
  )
}
