import React, { forwardRef } from 'react'
import Label from '../label/label'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
        <input
          ref={ref}
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${error ? 'border-red-500' : ''}`}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
