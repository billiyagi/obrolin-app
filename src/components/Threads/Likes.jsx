import { HiThumbUp, HiOutlineThumbUp } from 'react-icons/hi'

export default function Likes() {
  return (
    <button className='flex items-center gap-2 cursor-pointer'>
	  <HiOutlineThumbUp className='text-2xl'/>
	  <span>20</span>
    </button>
  )
}
