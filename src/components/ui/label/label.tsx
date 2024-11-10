import React, { forwardRef } from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        {...props}
        ref={ref}
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        {children}
      </label>
    )
  },
)

Label.displayName = 'Label'

export default Label
