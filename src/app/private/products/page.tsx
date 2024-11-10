import Link from 'next/link'
import React from 'react'
import { newProductDefinition } from './new/page-definition'
import { productPageDefinition } from './page-definition'
import { ProductService } from '@/application/services/product'
import { FirebaseProductAdapter } from '@/adapters/firebase/product'

const productService = new ProductService(new FirebaseProductAdapter())

export default async function Products() {
  const products = await productService.list()

  return (
    <div className="my-auto flex h-[90vh] w-[90%] flex-col rounded bg-white p-4">
      <h1>{productPageDefinition.title}</h1>
      <div className="flex-1 overflow-y-auto">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href={newProductDefinition.path}
        >
          {newProductDefinition.title}
        </Link>
      </div>
    </div>
  )
}
