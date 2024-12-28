import { ServicesContainer } from '@/application/services'
import { ProductCard } from '@/components/ui/product-card/product-card'
import { GuestRole } from '@/domain/enums/guest-type'
import React from 'react'

interface ClientProductListTemplateProps {
  title: string
  guestRole: GuestRole
}

const productService = ServicesContainer.getProductService()

export const ClientProductListTemplate: React.FC<
  ClientProductListTemplateProps
> = async ({ guestRole, title }) => {
  const promises = [productService.list({ disponibility: guestRole })]
  if (guestRole === GuestRole.GUEST) {
    promises.push(productService.list({ disponibility: GuestRole.GROOMSMAN }))
  }
  const [defaultProducts, groomsmanProducts] = await Promise.all(promises)
  const products = (
    groomsmanProducts
      ? defaultProducts.concat(groomsmanProducts)
      : defaultProducts
  ).sort((a, b) => a.minPrice - b.minPrice)

  return (
    <div className="flex-1 overflow-y-auto rounded bg-neutral-lightGray px-2 py-4">
      <h1 className="text-center text-2xl font-bold text-secondary-darkBlue">
        {title}
      </h1>
      <p className="px-4 text-center text-sm text-gray-700">
        Os itens são apenas sugestões de contribuição. Não será comprado
        exatamente o que está aqui, é apenas uma forma divertida de ajudar o
        casal!
      </p>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            guestRole={guestRole}
          />
        ))}
      </div>
    </div>
  )
}
