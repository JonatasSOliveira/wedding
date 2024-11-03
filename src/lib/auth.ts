'use server'

import { cookies } from 'next/headers'
import { JWTPayload, SignJWT, jwtVerify } from 'jose'
import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'

interface Session extends AuthenticatedUserResponseDTO {
  expires: Date
}

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

async function encrypt(payload: { [key: string]: unknown }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(key)
}

async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    })
    return payload
  } catch {
    return null
  }
}

export async function setSession(
  user: AuthenticatedUserResponseDTO,
): Promise<void> {
  const oneDay = 1000 * 60 * 60 * 24
  const expires = new Date(Date.now() + oneDay)
  const encryptedSession = await encrypt({ ...user, expires })
  cookies().set('session', encryptedSession, { expires, httpOnly: true })
}

export async function logout(): Promise<void> {
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession(): Promise<Session> {
  const sessionEncrypted = cookies().get('session')?.value
  if (!sessionEncrypted) throw new Error('User not authenticated')

  const decryptedData = await decrypt(sessionEncrypted)
  if (!decryptedData) throw new Error('User not authenticated')

  const sessionData: Session = { ...decryptedData } as unknown as Session
  sessionData.expires = new Date(sessionData.expires)
  return sessionData
}
