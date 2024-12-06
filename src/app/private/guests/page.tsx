import React from 'react'
import { guestPageDefinition } from './page-definition'
import { newGuestDefinition } from './form/page-definition'
import { RecordListTemplate } from '@/components/templates/record-list'
import { editGuestDefinition } from './form/[id]/page-definition'
import { ServicesContainer } from '@/application/services'

const guestService = ServicesContainer.getGuestService()

const ListGuestsPage: React.FC = async () => {
  const guests = await guestService.list()

  return (
    <RecordListTemplate
      title={guestPageDefinition.title}
      records={guests}
      labelAttribute="name"
      newRecordPageDefinition={newGuestDefinition}
      deleteAction={async (id) => {
        'use server'
        await guestService.delete(id)
      }}
      editRecordPageDefinition={editGuestDefinition}
    />
  )
}

export default ListGuestsPage
