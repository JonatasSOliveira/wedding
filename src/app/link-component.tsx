import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { PageDefinition } from '@/types/page-definition'

interface LinkComponentProps {
  pageDefinition: PageDefinition
}

export const LinkComponent = ({ pageDefinition }: LinkComponentProps) => (
  <Link
    href={pageDefinition.path}
    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-pink py-4 text-lg font-semibold text-secondary-darkBlue transition duration-300 hover:bg-pink-400"
  >
    <Icon icon="ant-design:gift-twotone" className="text-secondary-darkBlue" />
    {pageDefinition.title}
  </Link>
)
