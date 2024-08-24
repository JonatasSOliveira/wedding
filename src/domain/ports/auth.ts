import { SignInRequestDTO } from "@/domain/dtos/auth/request/sign-in"
import { SignUpRequestDTO } from "@/domain/dtos/auth/request/sign-up"
import { AuthenticatedUserResponseDTO } from "@/domain/dtos/auth/response/authenticated_user"

export interface AuthPort {
    signIn: (signInDTO: SignInRequestDTO) => Promise<AuthenticatedUserResponseDTO>
    signUp: (signUpDTO: SignUpRequestDTO) => Promise<AuthenticatedUserResponseDTO>
}