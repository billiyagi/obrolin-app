import { Link } from 'react-router'
import Topic from './Topic'
import Likes from './Likes'
import Dislikes from './Dislikes'
import Replies from './Replies'
import { Dot } from 'lucide-react'
import UserAvatatar from '../UserAvatatar'
import { postedAt } from '../../utils'
import { shortText } from '../../utils'

export default function ThreadItem({ id, title, body, topic, createdAt, upVotes, downVotes, user, totalComments, onUpVote, authUser, onDownVote, onNeutralize }) {
  const isThreadUpVoted = upVotes?.includes(authUser.id)
  const isThreadDownVoted = downVotes?.includes(authUser.id)

  return (
    <article className='rounded-lg py-5 px-5 bg-white shadow mb-5'>
      <UserAvatatar avatar={user.avatar} name={user.name}/>

      <div className='my-5'>
        <Link to={`/detail/${id}`} className='font-semibold text-2xl'>{title}</Link>
        <p className='text-gray-500 mt-3'>{shortText(body, 15)}...</p>
      </div>

      <div className='flex justify-between text-gray-500'>
        <div className='flex '>
          <Topic name={topic}/>
          <Dot />
          <p>{postedAt(createdAt)}</p>
        </div>

        <div className='flex items-center gap-5'>
          <Likes likes={upVotes} onClick={() => isThreadUpVoted ? onNeutralize(id) : onUpVote(id)} isLiked={isThreadUpVoted}/>
          <Dislikes dislikes={downVotes} onClick={() => isThreadDownVoted ? onNeutralize(id) : onDownVote(id)} isDisliked={isThreadDownVoted}/>
            
          <Replies totalComments={totalComments}/>
        </div>
      </div>
    </article>
  )
}
