import { HiOutlineReply } from 'react-icons/hi'

export default function Replies ({ totalComments }) {
  return (
    <div className='flex items-center gap-2'>
      <HiOutlineReply className='text-2xl' />
      <span>{totalComments}</span>
    </div>
  )
}
