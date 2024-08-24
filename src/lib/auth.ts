'use server'

import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { AuthenticatedUserResponseDTO } from '@/domain/dtos/auth/response/authenticated_user'

interface Session extends AuthenticatedUserResponseDTO {
    expires: Date
}

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .sign(key)
}

async function decrypt(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ['HS256'],
        })
        return payload
    } catch {
        return null
    }
}


export async function setSession(user: AuthenticatedUserResponseDTO): Promise<void> {
    const oneDay = 1000 * 60 * 60 * 24
    const expires = new Date(Date.now() + oneDay)
    const session: Session = { ...user, expires }
    const encryptedSession = await encrypt(session)
    cookies().set('session', encryptedSession, { expires, httpOnly: true })
}

export async function logout(): Promise<void> {
    cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession(): Promise<Session> {
    const session = cookies().get('session')?.value
    if (!session) throw new Error('User not authenticated')

    const decryptedSession = (await decrypt(session)) as Session
    if (!decryptedSession) throw new Error('User not authenticated')

    decryptedSession.expires = new Date(decryptedSession.expires)
    return decryptedSession
}