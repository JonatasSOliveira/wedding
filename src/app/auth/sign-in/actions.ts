'use server'

import { ServicesContainer } from '@/application/services'
import { AuthSignUpFormData } from './form-schema'
import { setSession } from '@/lib/auth'

export async function signIn(signUpData: AuthSignUpFormData): Promise<void> {
  const authService = ServicesContainer.getAuthService()
  const loggedUser = await authService.signIn(signUpData)
  await setSession(loggedUser)
}
