import React from 'react'
import { guestPageDefinition } from './page-definition'
import { GuestService } from '@/application/services/guests'
import { FirebaseGuestAdapter } from '@/adapters/firebase/guest'
import { newGuestDefinition } from './new/page-definition'
import Link from 'next/link'

const guestService = new GuestService(new FirebaseGuestAdapter())

const ListGuestsPage: React.FC = async () => {
  const guests = await guestService.list()

  return (
    <div className="my-auto flex h-[90vh] w-[90%] flex-col rounded bg-white p-4">
      <h1>{guestPageDefinition.title}</h1>
      <div className="flex-1 overflow-y-auto">
        {guests.map((guest) => (
          <div key={guest.id}>
            <p>{guest.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href={newGuestDefinition.path}
        >
          {newGuestDefinition.title}
        </Link>
      </div>
    </div>
  )
}

export default ListGuestsPage
