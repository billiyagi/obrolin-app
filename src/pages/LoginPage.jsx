import Layout from '../Layout'

import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'
import LoginForm from '../components/LoginForm'
import Swal from 'sweetalert2'

export default function LoginPage () {
  const dispatch = useDispatch()

  const handleLogin = async ({ email, password }) => {
    const auth = await dispatch(asyncSetAuthUser({ email, password }))
    if (!auth.status) {
      Swal.fire({
        title: 'Failed to Login',
        text: auth.message,
        icon: 'error'
      })
    }
  }

  return (
    <Layout>
      <div className='w-1/2 mx-auto bg-white p-5 rounded-lg shadow mt-10 mb-20'>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </Layout>
  )
}
