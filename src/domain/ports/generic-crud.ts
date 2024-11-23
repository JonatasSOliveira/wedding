import { AuthenticatedUserResponseDTO } from '../dtos/auth/response/authenticated_user'
import { ModelQuery } from '../model-querying'
import { BaseModel } from '../models/base'

export interface GenericCrudPort<CreateDTO, ListDTO, Model extends BaseModel> {
  create(
    createDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void>

  list(
    query?: ModelQuery<Model>,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO[]>

  get(
    query?: ModelQuery<Model>,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO>

  update(
    id: string,
    updateDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void>

  delete(id: string): Promise<void>
}
