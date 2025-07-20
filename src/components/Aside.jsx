import Button from './ui/Button'
import { HiOutlinePlus } from 'react-icons/hi'
import { TbLogout } from 'react-icons/tb'
import Avatar from './Avatar'
import { Link } from 'react-router'
import { HiMiniArrowLeft } from 'react-icons/hi2'

export default function Aside({ isBack = false }) {
  return (
    <aside>
	  <nav className='flex flex-col justify-center items-center gap-3'>
        {isBack && <Link title='Profile' to='/'>
          <Button rounded='full'>
            <HiMiniArrowLeft className='text-3xl' />
          </Button>
        </Link>}
        <Link title='Create Thread' to="/create"><Button rounded='full' title="Create Threads"><HiOutlinePlus className='text-3xl'/></Button></Link>
        <Link title='Profile' to='/profile'><Avatar name='Febry Billiyagi' className={'w-12'}/></Link>
        <Button rounded='full' title="Logout"><TbLogout className='text-3xl'/></Button>
	  </nav>
    </aside>
  )
}
