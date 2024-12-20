import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'
import { ModelQuery } from '@/domain/model-querying'
import { BaseModel } from '@/domain/models/base'
import { GenericCrudPort } from '@/domain/ports/generic-crud'

export abstract class GenericService<
  CreateDTO,
  ListDTO,
  Model extends BaseModel,
> {
  constructor(
    protected readonly adapter: GenericCrudPort<CreateDTO, ListDTO, Model>,
  ) {}

  public async create(
    createDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.adapter.create(createDTO, user)
  }

  public async list(
    query?: ModelQuery<Model> | undefined,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO[]> {
    return await this.adapter.list(query, user)
  }

  public async get(
    query?: ModelQuery<Model> | undefined,
    user?: AuthenticatedUserResponseDTO,
  ): Promise<ListDTO> {
    return await this.adapter.get(query, user)
  }

  public async update(
    id: string,
    updateDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void> {
    await this.adapter.update(id, updateDTO, user)
  }

  public async delete(id: string): Promise<void> {
    await this.adapter.delete(id)
  }
}
