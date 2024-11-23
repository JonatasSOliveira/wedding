import { BaseModel } from '@/domain/models/base'
import { GenericFirebaseRepository } from './repositories/generic'
import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { ModelQuery } from '@/domain/model-querying'
import { GenericCrudPort } from '@/domain/ports/generic-crud'

export abstract class FirebaseGenericAdapter<
  CreateDTO,
  ListDTO,
  Model extends BaseModel,
> implements GenericCrudPort<CreateDTO, ListDTO, Model>
{
  constructor(
    protected repository: GenericFirebaseRepository<CreateDTO, ListDTO, Model>,
  ) {}

  public async create(
    createDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.repository.create(createDTO, user)
  }

  public async list(
    query?: ModelQuery<Model> | undefined,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO[]> {
    return await this.repository.list(query, user?.id)
  }

  public async get(
    query?: ModelQuery<Model> | undefined,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO> {
    return await this.repository.get(query, user?.id)
  }

  public async update(
    id: string,
    updateDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.repository.update(id, updateDTO, user)
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
