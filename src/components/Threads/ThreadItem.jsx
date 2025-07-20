import { Link } from 'react-router'
import Topic from './Topic'
import Likes from './Likes'
import Dislikes from './Dislikes'
import Replies from './Replies'
import { Dot } from 'lucide-react'
import UserAvatatar from '../UserAvatatar'

export default function ThreadItem() {
  return (
    <article className='rounded-lg py-5 px-5 bg-white shadow mb-5'>
      <UserAvatatar name={'feb bill'}/>

      <div className='my-5'>
        <Link to={'/detail'} className='font-semibold text-2xl'>How Does Assign Job To Others is so dificult?</Link>
        <p className='text-gray-500 mt-3'>Im a product Officer and we wre thingking about moving to jakarta, indonesia. Especially at sudirman tower 2, in my opinion this is good opportunities for all of my products, so what do you say?</p>
      </div>

      <div className='flex justify-between text-gray-500'>
        <div className='flex '>
          <Topic/>
          <Dot />
          <p>7 Hour Ago</p>
        </div>

        <div className='flex items-center gap-5'>
          <Likes/>
          <Dislikes/>
          <Replies/>
        </div>
      </div>
    </article>
  )
}
