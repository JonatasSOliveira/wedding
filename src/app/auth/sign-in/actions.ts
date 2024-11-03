"use server";

import { AuthService } from "@/application/services/auth";
import { AuthSignUpFormData } from "./form-schema";
import { FirebaseAuthAdapter } from "@/adapters/firebase/auth";
import { setSession } from "@/lib/auth";

export async function signIn(signUpData: AuthSignUpFormData): Promise<void> {
  const authService = new AuthService(new FirebaseAuthAdapter());
  const loggedUser = await authService.signIn(signUpData);
  await setSession(loggedUser);
}
