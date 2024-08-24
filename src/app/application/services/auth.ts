import { SignInRequestDTO } from "@/domain/dtos/auth/request/sign-in";
import { SignUpRequestDTO } from "@/domain/dtos/auth/request/sign-up";
import { AuthenticatedUserResponseDTO } from "@/domain/dtos/auth/response/authenticated_user";
import { AuthPort } from "@/domain/ports/auth";

export class AuthService implements AuthPort {
    constructor(private adapter: AuthPort) { }

    public async signIn(signInDTO: SignInRequestDTO): Promise<AuthenticatedUserResponseDTO> {
        return this.adapter.signIn(signInDTO);
    }

    public async signUp(signUpDTO: SignUpRequestDTO): Promise<AuthenticatedUserResponseDTO> {
        return this.adapter.signUp(signUpDTO);
    }

}
