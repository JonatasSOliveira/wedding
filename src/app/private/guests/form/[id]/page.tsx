import React from 'react'
import GuestForm from '../form'
import { getGuest, updateGuest } from './action'
import { GuestFormSchema } from '../form-schema'

interface EditGuestPageProps {
  params: { id: string }
}

const EditGuestPage: React.FC<EditGuestPageProps> = async ({
  params: { id },
}) => {
  const guest = await getGuest(id)

  const handleAction = async (productData: GuestFormSchema) => {
    'use server'
    return await updateGuest(id, productData)
  }

  return <GuestForm action={handleAction} guest={guest} />
}

export default EditGuestPage
