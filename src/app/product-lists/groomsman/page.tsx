import { GuestRole } from '@/domain/enums/guest-type'
import React from 'react'
import { groomsmanProductListDefinition } from './page-definition'
import { ClientProductListTemplate } from '@/components/templates/client-product-list'

const PAGE_GUEST_ROLE = GuestRole.GROOMSMAN as const

const GroomsmanProductListPage = () => (
  <ClientProductListTemplate
    title={groomsmanProductListDefinition.title}
    guestRole={PAGE_GUEST_ROLE}
  />
)

export default GroomsmanProductListPage
