'use client'
import ComboBox, { ComboBoxOption } from '@/components/ui/combo-box/combo-box'
import React from 'react'

interface GuestReserveFormProps {
  guestOptions: ComboBoxOption[]
}

const GuestReserveForm: React.FC<GuestReserveFormProps> = ({
  guestOptions,
}) => {
  return (
    <div>
      <ComboBox options={guestOptions} label="Convidado" />
    </div>
  )
}

export default GuestReserveForm
