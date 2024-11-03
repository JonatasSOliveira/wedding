import { BaseModel } from './models/base'

export type ModelQuery<T extends BaseModel> = {
  [K in keyof T]?: T[K]
}
