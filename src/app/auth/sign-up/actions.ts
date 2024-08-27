'use server'
import { AuthService } from '@/app/application/services/auth'
import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthSignUpFormData } from './form-schema'
import { setSession } from '@/lib/auth'

export async function signUp(signUpData: AuthSignUpFormData): Promise<void> {
  const authService = new AuthService(new FirebaseAuthAdapter())
  const loggedUser = await authService.signUp(signUpData)
  await setSession(loggedUser)
}
