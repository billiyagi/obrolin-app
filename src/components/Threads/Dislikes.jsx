import { HiThumbDown, HiOutlineThumbDown } from 'react-icons/hi'

export default function Dislikes({ dislikes, onClick, isDisliked }) {
  return (
    <button className='flex items-center gap-2 cursor-pointer' onClick={onClick}>
	  {isDisliked ? <HiThumbDown className='text-2xl'/> : <HiOutlineThumbDown className='text-2xl'/>}
	  <span>{dislikes.length}</span>
    </button>
  )
}
