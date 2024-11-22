import { GuestRole } from '@/domain/enums/guest-type'
import React from 'react'
import { guestProductListDefinition } from './page-definition'
import { ClientProductListTemplate } from '@/components/templates/client-product-list'

const PAGE_GUEST_ROLE = GuestRole.GUEST as const

const GuestProductListPage: React.FC = () => (
  <ClientProductListTemplate
    title={guestProductListDefinition.title}
    guestRole={PAGE_GUEST_ROLE}
  />
)

export default GuestProductListPage
