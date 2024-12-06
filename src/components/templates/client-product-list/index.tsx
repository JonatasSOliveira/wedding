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
    <div className="my-auto h-[95vh] w-[95%] overflow-y-auto rounded bg-white px-2 py-4">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
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
