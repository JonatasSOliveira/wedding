'use client'

import { ProductFormSchema, productFormSchema } from './form-schema'
import React, { useState } from 'react'
import Input from '@/components/ui/input/input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { GuestRole, guestRoleLabels } from '@/domain/enums/guest-type'
import Form from '@/components/ui/form/form'
import { ListProductDTO } from '@/domain/dtos/product/response/list'

interface PoductFormProps {
  product?: ListProductDTO
  action: (productData: ProductFormSchema) => Promise<void>
}

export const ProductForm: React.FC<PoductFormProps> = ({ action, product }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductFormSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(productFormSchema),
    defaultValues: product,
  })
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const goBack = () => router.back()

  const addImageUrl = () => {
    setImageUrls([...imageUrls, ''])
  }

  const handleImageUrlChange = (index: number, value: string) => {
    const newImageUrls = [...imageUrls]
    newImageUrls[index] = value
    setImageUrls(newImageUrls)
    setValue('imgs_urls', newImageUrls)
  }

  const removeImageUrl = (index: number) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index)
    setImageUrls(newImageUrls)
    setValue('imgs_urls', newImageUrls)
  }

  const formAction: () => void = handleSubmit(
    async (data: ProductFormSchema) => {
      await action(data)
      goBack()
    },
  )

  return (
    <Form formAction={formAction} goBack={goBack}>
      <Input label="Nome" {...register('name')} error={errors.name?.message} />
      <Input
        label="Descrição"
        {...register('description')}
        error={errors.description?.message}
      />
      <Input
        label="Preço Mínimo"
        type="number"
        {...register('min_price')}
        error={errors.min_price?.message}
      />
      <Input
        label="Preço Máximo"
        type="number"
        {...register('max_price')}
        error={errors.max_price?.message}
      />
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700">Disponível para:</p>
        <div className="flex flex-row justify-between">
          {Object.values(GuestRole).map((disponibility) => (
            <div key={disponibility} className="flex flex-row">
              <input
                type="radio"
                id={'disponibility-' + disponibility}
                value={disponibility}
                {...register('disponibility')}
              />
              <label
                htmlFor={'disponibility-' + disponibility}
                className="ml-2 text-sm"
              >
                {guestRoleLabels[disponibility]}
              </label>
            </div>
          ))}
        </div>
        {errors.disponibility && (
          <span className="text-sm text-red-500">
            {errors.disponibility.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700">Imagens</p>
        {imageUrls.map((url, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="url"
              placeholder="URL da imagem"
              value={url}
              onChange={(e) => handleImageUrlChange(index, e.target.value)}
              className={`rounded border p-2 ${errors.imgs_urls ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => removeImageUrl(index)}
              className="ml-2 text-red-500"
            >
              X
            </button>
          </div>
        ))}
        <button type="button" onClick={addImageUrl} className="text-blue-500">
          Adicionar URL de Imagem
        </button>
        {errors.imgs_urls && (
          <span className="text-sm text-red-500">
            {errors.imgs_urls.message}
          </span>
        )}
      </div>
    </Form>
  )
}
