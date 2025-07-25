import React from 'react'
import UserAvatatar from '../UserAvatatar'
import { BiSolidBadgeCheck } from 'react-icons/bi'

export default function LeaderboardItem ({ user, total, order }) {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-3'>
        <UserAvatatar name={user.name} avatar={user.avatar} />
        {order === 0 && <BiSolidBadgeCheck className='text-2xl text-yellow-500' />}
        {order === 1 && <BiSolidBadgeCheck className='text-2xl text-blue-500' />}
      </div>
      <div>
        {total}
      </div>
    </div>
  )
}
