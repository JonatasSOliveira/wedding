import React from 'react'
import { newProductDefinition } from './form/page-definition'
import { productPageDefinition } from './page-definition'
import { RecordListTemplate } from '@/components/templates/record-list'
import { editProductDefinition } from './form/[id]/page-definition'
import { ServicesContainer } from '@/application/services'
import { currencyFormatter } from '@/utils/formatters'

const productService = ServicesContainer.getProductService()

export default async function Products() {
  const products = (await productService.list()).sort(
    (a, b) => a.minPrice - b.minPrice,
  )

  return (
    <RecordListTemplate
      title={productPageDefinition.title}
      newRecordPageDefinition={newProductDefinition}
      editRecordPageDefinition={editProductDefinition}
      records={products}
      labelAttribute="name"
      getDescription={(product) =>
        String(currencyFormatter.format(product.maxPrice))
      }
      deleteAction={async (id) => {
        'use server'
        await productService.delete(id)
      }}
    />
  )
}
