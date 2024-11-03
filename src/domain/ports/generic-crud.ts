import { AuthenticatedUserResponseDTO } from '../dtos/auth/response/authenticated_user'
import { ModelQuery } from '../model-querying'
import { BaseModel } from '../models/base'

export interface GenericCrudPort<CreateDTO, ListDTO, Model extends BaseModel> {
  create(
    createDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void>

  list(
    user: AuthenticatedUserResponseDTO,
    query?: ModelQuery<Model>,
  ): Promise<ListDTO[]>
}
