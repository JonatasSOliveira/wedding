import React from 'react'
import { guestPageDefinition } from './page-definition'
import { GuestService } from '@/application/services/guests'
import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { newGuestDefinition } from './form/page-definition'
import { RecordListTemplate } from '@/components/templates/record-list'
import { editGuestDefinition } from './form/[id]/page-definition'

const guestService = new GuestService(new FirebaseGuestAdapter())

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
