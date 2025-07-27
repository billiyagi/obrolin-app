import React from 'react'
import Avatar from '../ui/Avatar'
import Dislikes from '../Threads/Dislikes'
import Likes from '../Threads/Likes'
import { postedAt } from '../../utils'
import { useSelector } from 'react-redux'

export default function CommentItem ({ id, threadId, content, createdAt, upVotes, downVotes, user, onDownVote, onUpVote, onNeutralizeVote }) {
  const authUser = useSelector((state) => state.authUser)
  const isDisliked = downVotes.includes(authUser.id)
  const isLiked = upVotes.includes(authUser.id)

  return (
    <div className='flex gap-3 items-start' data-id={id}>
      <Avatar image={user.avatar} name={user.name} />
      <div className='bg-white shadow p-5 rounded-lg w-full'>
        <div className='flex gap-3 items-center justify-between mb-3'>
          <div className='font-semibold'>{user.name}</div>
          <div className='text-gray-400'>{postedAt(createdAt)}</div>
        </div>
        <p>{content}</p>

        <div className='flex mt-5 gap-3'>
          <Likes likes={upVotes} isLiked={isLiked} onClick={() => isLiked ? onNeutralizeVote(threadId, id) : onUpVote(threadId, id)} />
          <Dislikes dislikes={downVotes} isDisliked={isDisliked} onClick={() => isDisliked ? onNeutralizeVote(threadId, id) : onDownVote(threadId, id)} />
        </div>
      </div>
    </div>
  )
}
