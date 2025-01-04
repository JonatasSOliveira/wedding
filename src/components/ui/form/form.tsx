import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

interface FormProps {
  children: React.ReactNode
  formAction: () => Promise<void> | void
  goBack: () => void
  isSaving?: boolean
}

const Form: React.FC<FormProps> = ({
  children,
  formAction,
  goBack,
  isSaving,
}) => (
  <form
    action={formAction}
    className="my-auto flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md"
  >
    <div className="mb-4 h-[90%] overflow-y-auto">{children}</div>
    <div className="flex flex-row justify-around gap-2">
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="button"
        onClick={goBack}
      >
        Cancelar
      </button>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? (
          <Icon
            icon="line-md:loading-loop"
            width="24"
            height="24"
            className="text-white"
          />
        ) : (
          'Salvar'
        )}
      </button>
    </div>
  </form>
)

export default Form
