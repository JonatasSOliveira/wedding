import React from 'react'
import SignInForm from './form'
import { signInPageDefinition } from './page-definition'

export default function SignInPage() {
  return (
    <div className="my-auto flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h1 className="mb-2 text-center text-xl font-bold">
        {signInPageDefinition.title}
      </h1>
      <SignInForm />
    </div>
  )
}
