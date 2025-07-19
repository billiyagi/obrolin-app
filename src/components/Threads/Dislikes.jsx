import { HiThumbDown, HiOutlineThumbDown } from 'react-icons/hi'

export default function Dislikes() {
  return (
    <button className='flex items-center gap-2 cursor-pointer'>
	  <HiOutlineThumbDown className='text-2xl'/>
	  <span>10</span>
    </button>
  )
}
