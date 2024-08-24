import { SignInRequestDTO } from '@/domain/dtos/auth/request/sign-in';
import { SignUpRequestDTO } from '@/domain/dtos/auth/request/sign-up';
import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user';
import { AuthPort } from '@/domain/ports/auth';
import { firebaseAuth } from '@/infra/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export class FirebaseAuthAdapter implements AuthPort {
    public async signIn({ email, password }: SignInRequestDTO): Promise<AuthenticatedUserResponseDTO> {
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password)
            const authenticatedUser: AuthenticatedUserResponseDTO = {
                id: response.user.uid,
                email: response.user.email as string,
            }
            return authenticatedUser
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    public async signUp({ email, password }: SignUpRequestDTO): Promise<AuthenticatedUserResponseDTO> {
        try {
            const response = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            const authenticatedUser: AuthenticatedUserResponseDTO = {
                id: response.user.uid,
                email: response.user.email as string,
            }
            return authenticatedUser
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}
