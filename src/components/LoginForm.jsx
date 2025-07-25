import Input from '../components/ui/Input'
import { Link } from 'react-router'
import Button from '../components/ui/Button'
import useInput from '../hooks/useInput'

export default function LoginForm ({ handleLogin }) {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const onSubmit = () => {
    handleLogin({ email, password })
  }
  return (
    <div>
      <div className='mb-5 text-2xl font-semibold'>Login to your account</div>
      <Input className='mb-3' label='Email' id='email' type='email' value={email} onChange={setEmail} />
      <Input className='mb-5' label='Password' id='password' type='password' value={password} onChange={setPassword} />
      <div className='flex justify-between items-center'>
        <div>Tidak punya akun? <Link to='/register' className='text-blue-600'>Daftar disini</Link></div>
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  )
}
