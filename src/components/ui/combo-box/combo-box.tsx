import React, { forwardRef } from 'react'
import Label from '../label/label'

export interface ComboBoxOption {
  label: string
  value: string | number
}

interface ComboBoxProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: ComboBoxOption[]
  error?: string
}

const ComboBox = forwardRef<HTMLSelectElement, ComboBoxProps>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        <Label>{label}</Label>
        <select
          {...props}
          ref={ref}
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${error ? 'border-red-500' : ''}`}
        >
          <option value="">Selecione uma opção</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    )
  },
)

ComboBox.displayName = 'ComboBox'

export default ComboBox
