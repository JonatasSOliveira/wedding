'use client'

import React, { useState } from 'react'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
// import GuestReserveDialog from '@/components/dialogs/guest-reserve/guest-reserve'
import { GuestRole } from '@/domain/enums/guest-type'
import Link from 'next/link'

interface ProductCardProps {
  product: ListProductDTO
  guestRole: GuestRole
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [startX, setStartX] = useState<number | null>(null)

  const handleNextImage = () => {
    if (product.imgs_urls && currentImageIndex < product.imgs_urls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (diff > 50) {
      handleNextImage()
      setStartX(null)
    } else if (diff < -50) {
      handlePreviousImage()
      setStartX(null)
    }
  }

  return (
    <div className="flex w-full max-w-xs flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-md">
        {/* Carrossel de Imagens */}
        {product.imgs_urls && product.imgs_urls.length > 0 ? (
          <div
            className="h-full w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <img
              src={product.imgs_urls[currentImageIndex]}
              alt={product.name}
              className="h-full w-full rounded-md object-cover"
            />

            {/* Indicadores de Páginas */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
              {product.imgs_urls.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col space-y-1">
        <h2 className="line-clamp-2 text-lg font-semibold">{product.name}</h2>

        <div className="text-sm text-gray-700">
          {product.min_price !== product.max_price ? (
            <span>
              R$ {product.min_price} - R$ {product.max_price}
            </span>
          ) : (
            <span>R$ {product.min_price}</span>
          )}
        </div>

        {/* Botão de Reservar */}
        {/* <GuestReserveDialog product={product} guestRole={guestRole} /> */}
        <Link
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href={`/payment/${product.id}`}
        >
          Presentear
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
