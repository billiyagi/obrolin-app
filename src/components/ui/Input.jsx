import React from 'react'

export default function Input({ type, className, isLabel = true, label, value, id, onChange, ...props }) {

  const OnlyInput = () => (<input
    type={type}
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    id={id}
    {...props}
  />)

  const WithLabel = () => (<label htmlFor={id}>
    <span className="text-sm font-medium text-gray-700 inline-block mb-2"> {label} </span>

    <OnlyInput/>
  </label>)

  return (
    <div>
	  {isLabel ? <WithLabel/> : <OnlyInput/>}
    </div>
  )
}
