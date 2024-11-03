'use client'

import { ProductDisponibility, productDisponibilityLabels } from '@/domain/dtos/product/request/create'
import { ProductFormSchema, productFormSchema } from './form-schema'
import React, { useState } from 'react'

import Input from '@/ui/components/input'
import { createProduct } from './action'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

export default function NewProductForm() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<ProductFormSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(productFormSchema),
  })
  const [imageUrls, setImageUrls] = useState<string[]>([]);


  const goBack = () => router.back()


  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const handleImageUrlChange = (index: number, value: string) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
    setValue('imgs_urls', newImageUrls);
  };

  const removeImageUrl = (index: number) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);
    setValue('imgs_urls', newImageUrls);
  };

  const formAction: () => void = handleSubmit(async (data: ProductFormSchema) => {
    await createProduct(data)
    goBack()
  });

  return (
    <form action={formAction} className="my-auto flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md w-[90%] h-[75vh]">
      <div className='overflow-y-auto h-[90%] mb-4'>
        <Input label="Nome" {...register('name')} error={errors.name?.message} />
        <Input label="Descrição" {...register('description')} error={errors.description?.message} />
        <Input label="Preço Mínimo" type="number" {...register('min_price')} error={errors.min_price?.message} />
        <Input label="Preço Máximo" type="number" {...register('max_price')} error={errors.max_price?.message} />
        <div className='mb-4'>
          <p className='text-sm font-bold text-gray-700'>Disponível para:</p>
          <div className="flex flex-row justify-between">
            {Object.values(ProductDisponibility).map((disponibility) => (
              <div key={disponibility} className='flex flex-row'>
                <input type="radio" id={"disponibility-" + disponibility} value={disponibility} {...register('disponibility')} />
                <label htmlFor={"disponibility-" + disponibility} className="ml-2 text-sm">{productDisponibilityLabels[disponibility]}</label>
              </div>
            ))}
          </div>
          {errors.disponibility && <span className="text-sm text-red-500">{errors.disponibility.message}</span>}
        </div>
        <div className='mb-4'>
          <p className="text-sm font-bold text-gray-700">Imagens</p>
          {imageUrls.map((url, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="url"
                placeholder="URL da imagem"
                value={url}
                onChange={(e) => handleImageUrlChange(index, e.target.value)}
                className={`border rounded p-2 ${errors.imgs_urls ? 'border-red-500' : ''}`}
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
          <button
            type="button"
            onClick={addImageUrl}
            className="text-blue-500"
          >
            Adicionar URL de Imagem
          </button>
          {errors.imgs_urls && <span className="text-sm text-red-500">{errors.imgs_urls.message}</span>}
        </div>
      </div>
      <div className="flex flex-row justify-around gap-2">
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
          onClick={goBack}
        >
          Cancelar
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
