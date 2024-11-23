import React from 'react'
import { newProductDefinition } from './form/page-definition'
import { productPageDefinition } from './page-definition'
import { ProductService } from '@/application/services/product'
import { FirebaseProductAdapter } from '@/adapters/firebase/product'
import { RecordListTemplate } from '@/components/templates/record-list'
import { editProductDefinition } from './form/[id]/page-definition'

const productService = new ProductService(new FirebaseProductAdapter())

export default async function Products() {
  const products = await productService.list()

  return (
    <RecordListTemplate
      title={productPageDefinition.title}
      newRecordPageDefinition={newProductDefinition}
      editRecordPageDefinition={editProductDefinition}
      records={products}
      labelAttribute="name"
      deleteAction={async (id) => {
        'use server'
        await productService.delete(id)
      }}
    />
  )
}
