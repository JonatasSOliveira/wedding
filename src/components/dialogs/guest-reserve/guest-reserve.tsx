'use client'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/shadcn/ui/dialog'
import { ComboBoxOption } from '@/components/ui/combo-box/combo-box'
import { ListProductDTO } from '@/domain/dtos/product/response/list'
import { GuestRole } from '@/domain/enums/guest-type'
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import React, { useCallback, useEffect, useState, useTransition } from 'react'
import GuestReserveForm from './form'
import { getGuests } from './actions'

interface GuestReserveDialogProps {
  guestRole: GuestRole
  product: ListProductDTO
}

const GuestReserveDialog: React.FC<GuestReserveDialogProps> = ({
  guestRole,
  product,
}) => {
  const [guestsOptions, setGuestsOptions] = useState<ComboBoxOption[]>([])
  const [isPending, startTransition] = useTransition()

  const handleGetGuests = useCallback(() => {
    startTransition(async () => {
      const guests = await getGuests(guestRole)
      setGuestsOptions(
        guests.map((guest) => ({
          label: guest.name,
          value: guest.id,
        })),
      )
    })
  }, [guestRole])

  useEffect(() => {
    handleGetGuests()
  }, [handleGetGuests])
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-blue-500 py-2 font-semibold text-white transition hover:bg-blue-600"
        >
          {isPending ? 'Carregando...' : 'Presentear'}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deseja reservar o produto {product.name}?</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <GuestReserveForm guestOptions={guestsOptions} />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default GuestReserveDialog
