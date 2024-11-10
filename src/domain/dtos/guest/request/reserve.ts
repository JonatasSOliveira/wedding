import { GuestModel, ProductResevartion } from '@/domain/models/guest'

export interface ReservationDTO
  extends Pick<GuestModel, 'id'>,
    Pick<ProductResevartion, 'product_id'> {}
