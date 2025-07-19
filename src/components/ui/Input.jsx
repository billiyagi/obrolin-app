import React from 'react'

export default function Input({ type, className, isLabel, label, value, onChange, ...props }) {

  const OnlyInput = () => (<input
    type={type}
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    {...props}
  />)

  const WithLabel = () => (<label htmlFor={label}>
    <span className="text-sm font-medium text-gray-700"> {label} </span>

    <OnlyInput/>
  </label>)

  return (
    <div>
	  {isLabel ? <WithLabel/> : <OnlyInput/>}
    </div>
  )
}
