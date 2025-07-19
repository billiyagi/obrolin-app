import React from 'react'
import UserAvatatar from '../UserAvatatar'
import { BiSolidBadgeCheck } from 'react-icons/bi'

export default function LeaderboardItem({ name, total }) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <UserAvatatar name={'bill jhon'}/>
        <BiSolidBadgeCheck className='text-2xl text-yellow-500'/>
      </div>
      <div>
        209
      </div>
    </div>
  )
}
