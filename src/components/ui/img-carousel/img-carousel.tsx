'use client'
import React, { useState } from 'react'

interface ImgCarouselProps {
  imageUrls: string[]
  alt?: string
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ imageUrls, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [startX, setStartX] = useState<number | null>(null)

  const handleNextImage = () => {
    if (imageUrls && currentImageIndex < imageUrls.length - 1) {
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
    <div
      className="flex h-full w-full flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-neutral-mediumGray p-1">
        <img
          src={imageUrls[currentImageIndex]}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="mb-1 mt-1 flex justify-center space-x-1">
        {imageUrls.map((imageUrl, index) => (
          <span
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${index === currentImageIndex ? 'bg-primary-blue' : 'bg-neutral-mediumGray'}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    // <div
    //   className="flex h-full w-full flex-col justify-between"
    // onTouchStart={handleTouchStart}
    // onTouchMove={handleTouchMove}
    // >
    //   {/* Contêiner da imagem */}
    //   <div className="flex flex-1 items-center justify-center rounded-sm bg-slate-200">
    //     <div className="aspect-video w-full">
    //       <img
    //         src={imageUrls[currentImageIndex]}
    //         alt={alt}
    //         className="h-full w-full rounded-md object-cover"
    //       />
    //     </div>
    //   </div>

    //   {/* Indicadores de Páginas */}
    //   <div className="flex justify-center space-x-1">
    //     {imageUrls.map((_, index) => (
    //       <span
    //         key={index}
    //         className={`h-2 w-2 rounded-full ${
    //           index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
    //         }`}
    //       ></span>
    //     ))}
    //   </div>
    // </div>
  )
}

export default ImgCarousel
