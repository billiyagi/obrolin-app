import { TbLogout } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { asyncUnsetAuthUser } from '../states/authUser/action'
import Button from './ui/Button'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

export default function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will logout from your account',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#bdbdbd',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(asyncUnsetAuthUser())
        navigate('/login')
      }
    })
  }

  return (
    <Button rounded='full' title="Logout" onClick={onLogout}><TbLogout className='text-3xl'/></Button>
  )
}
