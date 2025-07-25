import Layout from '../Layout'
import RegisterForm from '../components/RegisterForm'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/user/action'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

export default function RegisterPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async ({ name, email, password }) => {
    const register = await dispatch(asyncRegisterUser({ name, email, password }))
    if (register.status) {
      Swal.fire({
        title: 'Success',
        text: 'Account Successfully Registered',
        icon: 'success'
      })
      navigate('/login')
    } else {
      Swal.fire({
        title: 'Failed',
        text: register.message,
        icon: 'error'
      })
    }
  }

  return (
    <Layout>
      <div className='w-1/2 mx-auto bg-white p-5 rounded-lg shadow mt-10 mb-20'>
        <RegisterForm handleRegister={handleRegister} />
      </div>
    </Layout>
  )
}
