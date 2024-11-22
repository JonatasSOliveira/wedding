import React from 'react'
import { ProductForm } from './form'
import { createProduct } from './action'

const ProductRegisterPage = () => <ProductForm action={createProduct} />

export default ProductRegisterPage
