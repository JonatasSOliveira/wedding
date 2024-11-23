'use client'

import Form from '@/components/ui/form/form'
import React from 'react'
import { guestFormSchema, GuestFormSchema } from './form-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/ui/input/input'
import { GuestRole, guestRoleLabels } from '@/domain/enums/guest-type'
import { useRouter } from 'next/navigation'
import { ListGuestDTO } from '@/domain/dtos/guest/response/list'

interface GuestFormProps {
  action: (guestFormSchema: GuestFormSchema) => Promise<void>
  guest?: ListGuestDTO
}

const GuestForm: React.FC<GuestFormProps> = ({ action, guest }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestFormSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(guestFormSchema),
    defaultValues: guest,
  })
  const goBack = () => router.back()

  const formAction: () => void = handleSubmit(async (data: GuestFormSchema) => {
    await action(data)
    goBack()
  })

  return (
    <Form formAction={formAction} goBack={goBack}>
      <Input label="Nome" {...register('name')} error={errors.name?.message} />
      <Input
        label="E-mail"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Telefone"
        {...register('phone')}
        error={errors.phone?.message}
      />
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700">Tipo convidado:</p>
        <div className="flex flex-row justify-between">
          {Object.values(GuestRole).map((role) => (
            <div key={role} className="flex flex-row">
              <input
                type="radio"
                id={'role-' + role}
                value={role}
                {...register('role')}
              />
              <label htmlFor={'role-' + role} className="ml-2 text-sm">
                {guestRoleLabels[role]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </Form>
  )
}

export default GuestForm
