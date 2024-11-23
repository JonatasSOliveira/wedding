'use client'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog'
import React from 'react'

interface DeleteRecordDialogProps {
  recordLabel: string
  id: string
  deleteAction: (id: string) => Promise<void>
}

export const DeleteRecordDialog: React.FC<DeleteRecordDialogProps> = ({
  recordLabel,
  id,
  deleteAction,
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
        type="button"
      >
        Excluir
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ATENÇÃO!</DialogTitle>
        <div>
          <p>Realmente deseja excluir o registro {recordLabel}?</p>
        </div>
        <DialogFooter className="flex flex-row justify-center gap-2">
          <DialogClose asChild>
            <button
              className="rounded bg-slate-100 px-4 py-2 font-bold text-black hover:bg-slate-200"
              type="button"
            >
              Cancelar
            </button>
          </DialogClose>
          <button
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
            type="button"
            onClick={() => {
              deleteAction(id)
              window.location.reload()
            }}
          >
            Excluir
          </button>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)
