import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { ProductService } from '@/application/services/product'
import ProductCard from '@/components/ui/product-card/product-card'
import { GuestRole } from '@/domain/enums/guest-type'
import React from 'react'

const productService = new ProductService(new FirebaseProductAdapter())
const PAGE_GUEST_ROLE = GuestRole.GROOMSMAN as const

export default async function BestManProductList() {
  const products = await productService.list({
    disponibility: PAGE_GUEST_ROLE,
  })

  return (
    <div className="my-auto flex h-[90vh] w-[90%] flex-col rounded bg-white p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          guestRole={PAGE_GUEST_ROLE}
        />
      ))}
    </div>
  )
}
