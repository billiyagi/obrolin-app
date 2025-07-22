import { HiThumbDown, HiOutlineThumbDown } from 'react-icons/hi'

export default function Dislikes({ dislikes }) {
  return (
    <button className='flex items-center gap-2 cursor-pointer'>
	  <HiOutlineThumbDown className='text-2xl'/>
	  <span>{dislikes.length}</span>
    </button>
  )
}
