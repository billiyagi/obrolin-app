import Layout from '../Layout'

import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'
import LoginForm from '../components/LoginForm'

export default function LoginPage () {
  const dispatch = useDispatch()

  const handleLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }

  return (
    <Layout>
      <div className='w-1/2 mx-auto bg-white p-5 rounded-lg shadow mt-10 mb-20'>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </Layout>
  )
}
