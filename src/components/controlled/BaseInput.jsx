import React from 'react'

const BaseInput = React.forwardRef(
  ({ type = 'text', label, placeholder, ...rest }, ref) => {
    return (
      <div className="">
        <div style={{ fontSize: 14 }}>{label}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          {...rest}
          ref={ref}
        />
      </div>
    )
  }
)

export default BaseInput
