"use client";

import { AuthSignUpFormData, authSignUpFormSchema } from "./form-schema";

import React from "react";
import { homePageDefinition } from "@/app/private/home/page-definition";
import { signIn } from "./actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AuthSignUpFormData>({
    mode: "onSubmit",
    resolver: zodResolver(authSignUpFormSchema),
  });

  const goBack = () => router.back();

  const formAction: () => void = handleSubmit(
    async (data: AuthSignUpFormData) => {
      await signIn(data);
      router.push(homePageDefinition.path);
    },
  );

  return (
    <form
      action={formAction}
      className="my-auto flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          {...register("email")}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          {...register("password")}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="flex flex-row justify-around gap-2">
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
          onClick={goBack}
        >
          Voltar
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Logar
        </button>
      </div>
    </form>
  );
}
