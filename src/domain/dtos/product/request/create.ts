export enum ProductDisponibility {
  BEST_MAN = 'BEST_MAN',
  GUEST = 'GUEST',
}

export const productDisponibilityLabels = {
  [ProductDisponibility.BEST_MAN]: 'Padrinho',
  [ProductDisponibility.GUEST]: 'Convidado',
} as const

export interface CreateProductDTO {
  name: string
  description?: string
  min_price: number
  max_price: number
  imgs_urls?: string[]
  disponibility: ProductDisponibility
}
