import React from 'react'
import Link from 'next/link'
import { productPageDefinition } from '../products/page-definition'
import { guestPageDefinition } from '../guests/page-definition'
import { homePageDefinition } from './page-definition'
import { PageDefinition } from '@/types/page-definition'

interface PageLinkProps {
  pageDefinition: PageDefinition
}

const PageLink: React.FC<PageLinkProps> = ({ pageDefinition }) => (
  <Link
    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    href={pageDefinition.path}
  >
    {pageDefinition.title}
  </Link>
)

const HomePage: React.FC = () => (
  <div className="my-auto flex h-[90vh] w-[90%] flex-col gap-2 rounded bg-white p-4">
    <h1 className="mb-2 text-center text-xl font-bold">
      {homePageDefinition.title}
    </h1>
    {[productPageDefinition, guestPageDefinition].map((pageDefinition) => (
      <PageLink key={pageDefinition.path} pageDefinition={pageDefinition} />
    ))}
  </div>
)

export default HomePage
