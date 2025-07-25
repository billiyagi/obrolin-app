import React from 'react'

export default function Avatar ({ name, color = 'fff', background = 'random', className, image = null }) {
  return (
    <img src={image || `https://ui-avatars.com/api/?name=${name}&background=${background}&color=${color}`} alt={`Avatar of ${name}`} className={`rounded-full ${className}`} />
  )
}
