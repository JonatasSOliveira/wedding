export enum GuestRole {
  GUEST = 'GUEST',
  GROOMSMAN = 'GROOMSMAN',
}

export const guestRoleLabels = {
  [GuestRole.GROOMSMAN]: 'Padrinho',
  [GuestRole.GUEST]: 'Convidado',
} as const
