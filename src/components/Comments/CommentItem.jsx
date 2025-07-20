import React from 'react'
import Avatar from '../Avatar'
import Dislikes from '../Threads/Dislikes'
import Likes from '../Threads/Likes'

export default function CommentItem() {
  return (
    <div className='flex gap-3 items-start'>
	  <Avatar name={'slsk'}/>
	  <div className='bg-white shadow p-5 rounded-lg'>
        <div className='flex gap-3 items-center justify-between mb-3'>
          <div className='font-semibold'>Febry Billiyagi</div>
          <div className='text-gray-400'>7 Hour Ago</div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga similique, saepe laudantium pariatur voluptatibus asperiores rem eum, itaque suscipit fugit voluptatum cupiditate officia unde libero esse expedita nesciunt dignissimos. Pariatur.</p>

        <div className='flex mt-5 gap-3'>
          <Likes/>
          <Dislikes/>
        </div>
      </div>
    </div>
  )
}
