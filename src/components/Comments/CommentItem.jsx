import React from 'react'
import Avatar from '../Avatar'
import Dislikes from '../Threads/Dislikes'
import Likes from '../Threads/Likes'
import { postedAt } from '../../utils'

export default function CommentItem({ id, content, createdAt, upVotes, downVotes, user }) {
  return (
    <div className='flex gap-3 items-start' data-id={id}>
	  <Avatar image={user.avatar} name={user.name}/>
	  <div className='bg-white shadow p-5 rounded-lg w-full'>
        <div className='flex gap-3 items-center justify-between mb-3'>
          <div className='font-semibold'>{user.name}</div>
          <div className='text-gray-400'>{postedAt(createdAt)}</div>
        </div>
        <p>{content}</p>

        <div className='flex mt-5 gap-3'>
          <Likes likes={upVotes}/>
          <Dislikes dislikes={downVotes}/>
        </div>
      </div>
    </div>
  )
}
