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
  const products = await productService.list({
    disponibility: guestRole,
  })

  return (
    <div className="flex-1 overflow-y-auto rounded bg-neutral-lightGray px-2 py-4">
      <h1 className="text-center text-2xl font-bold text-secondary-darkBlue">
        {title}
      </h1>
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
