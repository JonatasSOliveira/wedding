import React from 'react'
import GuestForm from './form'
import { createGuest } from './actions'

const NewGuestPage: React.FC = () => <GuestForm action={createGuest} />

export default NewGuestPage
