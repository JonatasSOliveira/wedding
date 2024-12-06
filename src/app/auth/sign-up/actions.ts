'use server'

import { ServicesContainer } from '@/application/services'
import { AuthSignUpFormData } from './form-schema'
import { setSession } from '@/lib/auth'

export async function signUp(signUpData: AuthSignUpFormData): Promise<void> {
  const authService = ServicesContainer.getAuthService()
  const loggedUser = await authService.signUp(signUpData)
  await setSession(loggedUser)
}
