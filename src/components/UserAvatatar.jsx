import Avatar from './Avatar'

export default function UserAvatatar({ name, avatar }) {
  return (
    <div className='flex items-center gap-3'>
      <Avatar className="w-10" name={name} image={avatar}/>
      <span className='text-lg'>{name}</span>
    </div>
  )
}
