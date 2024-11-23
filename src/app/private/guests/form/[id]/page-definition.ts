import { PageDefinition } from '@/types/page-definition'

export const editGuestDefinition: PageDefinition = {
  path: '/private/guests/form/:id',
  title: 'Editar Convidado',
} as const
