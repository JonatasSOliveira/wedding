import React from 'react'
import Link from 'next/link'
import { productPageDefinition } from '../products/page-definition'

export default function HomePage() {
  return (
    <div>
      <Link
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        href={productPageDefinition.path}
      >
        {productPageDefinition.title}
      </Link>
    </div>
  )
}
