import React from 'react'
import Link from 'next/link'
import { productPageDefinition } from '../products/page-definition'
import { guestPageDefinition } from '../guests/page-definition'
import { homePageDefinition } from './page-definition'

const HomePage: React.FC = () => (
  <div className="my-auto flex h-[90vh] w-[90%] flex-col gap-2 rounded bg-white p-4">
    <h1>{homePageDefinition.title}</h1>
    <Link
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      href={productPageDefinition.path}
    >
      {productPageDefinition.title}
    </Link>
    <Link
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      href={guestPageDefinition.path}
    >
      {guestPageDefinition.title}
    </Link>
  </div>
)

export default HomePage
