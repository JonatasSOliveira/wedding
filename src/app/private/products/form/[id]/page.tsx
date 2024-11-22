import React from 'react'
import { getProduct, updateProduct } from './actions'
import { ProductForm } from '../form'
import { ProductFormSchema } from '../form-schema'

interface EditProductPageProps {
  params: { id: string }
}

const EditProductPage: React.FC<EditProductPageProps> = async ({
  params: { id },
}) => {
  const product = await getProduct(id)

  const handleAction = async (productData: ProductFormSchema) => {
    'use server'
    return await updateProduct(id, productData)
  }

  return <ProductForm action={handleAction} product={product} />
}

export default EditProductPage
