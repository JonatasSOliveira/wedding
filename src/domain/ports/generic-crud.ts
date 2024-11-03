import { AuthenticatedUserResponseDTO } from "../dtos/auth/response/authenticated_user";

export interface GenericCrudPort<CreateDTO> {
  create(
    createDTO: CreateDTO,
    user: AuthenticatedUserResponseDTO,
  ): Promise<void>;
}
