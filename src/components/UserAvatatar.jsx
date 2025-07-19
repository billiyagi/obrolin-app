import Avatar from './Avatar'

export default function UserAvatatar({ name }) {
  return (
    <div className='flex items-center gap-3'>
      <Avatar className="w-10" name={name}/>
      <span className='text-lg'>{name}</span>
    </div>
  )
}
