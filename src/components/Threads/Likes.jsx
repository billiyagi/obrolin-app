import { HiThumbUp, HiOutlineThumbUp } from 'react-icons/hi'

export default function Likes ({ likes, onClick, isLiked }) {
  return (
    <button className='flex items-center gap-2 cursor-pointer' onClick={onClick}>
      {isLiked ? <HiThumbUp className='text-2xl' /> : <HiOutlineThumbUp className='text-2xl' />}
      <span>{likes.length}</span>
    </button>
  )
}
