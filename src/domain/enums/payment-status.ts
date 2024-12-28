export enum PaymentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export const paymentStatusLabels = {
  [PaymentStatus.PENDING]: 'Pendente',
  [PaymentStatus.APPROVED]: 'Aprovado',
  [PaymentStatus.REJECTED]: 'Rejeitado',
} as const
