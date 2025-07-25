import Avatar from './Avatar'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

export default function ProfileButton () {
  const authUser = useSelector((state) => state.authUser)
  return (
    <Link title='Profile' to='/profile'><Avatar name={authUser.name} className='w-12' image={authUser.avatar} /></Link>
  )
}
