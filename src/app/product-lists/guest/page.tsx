import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { ProductService } from '@/application/services/product'
import { ProductDisponibility } from '@/domain/models/product'
import { getSession } from '@/lib/auth'
import React from 'react'

const productService = new ProductService(new FirebaseProductAdapter())

export default async function GuestProductList() {
  const products = await productService.list(await getSession(), {
    disponibility: ProductDisponibility.GUEST,
  })
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}
