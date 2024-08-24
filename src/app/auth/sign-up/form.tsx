'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { AuthSignUpFormData, authSignUpFormSchema } from './form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUp } from './actions'


export default function SignUpForm() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<AuthSignUpFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(authSignUpFormSchema),
    })

    const goBack = () => router.back()

    const formAction: () => void = handleSubmit(async (data: AuthSignUpFormData) => {
        await signUp(data);
        // router.push(homePageDefinition.path)
    });

    return (
        <form action={formAction} className='flex flex-col rounded shadow-md my-auto bg-white px-8 pt-6 pb-8'>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('email')} type="email" name="email" id="email" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Senha</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('password')} type="password" name="password" id="password" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">Confirmar Senha</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('confirm_password')} type="password" name="confirm_password" id="confirm_password" />
            </div>
            <div className="flex flex-row gap-2 justify-around">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={goBack}>Voltar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Cadastrar</button>
            </div>
        </form>
    )
}
