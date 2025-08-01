import Button from './ui/Button'
import { HiOutlinePlus } from 'react-icons/hi'
import { Link } from 'react-router'
import { HiMiniArrowLeft } from 'react-icons/hi2'
import LogoutButton from './LogoutButton'
import ProfileButton from './ProfileButton'

export default function Aside ({ isBack = false }) {
  return (
    <aside>
      <nav className='flex flex-col justify-center items-center gap-3'>
        {isBack &&
          <Link title='Back' to='/'>
            <Button rounded='full'>
              <HiMiniArrowLeft className='text-3xl' />
            </Button>
          </Link>}
        <Link title='Create Thread' to='/create' data-testid='create-thread-button'>
          <Button rounded='full' title='Create Threads'>
            <HiOutlinePlus className='text-3xl' />
          </Button>
        </Link>
        <ProfileButton />
        <LogoutButton />
      </nav>
    </aside>
  )
}
