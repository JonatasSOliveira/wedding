import { AuthenticatedUserResponseDTO } from '../dtos/auth/response/authenticated_user'
import { ModelQuery } from '../model-querying'
import { BaseModel } from '../models/base'

export interface GenericCrudPort<ListDTO, Model extends BaseModel> {
  create(
    createDTO: Partial<Model>,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<string>

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
    updateDTO: Partial<Model>,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<void>

  delete(id: string): Promise<void>
}
