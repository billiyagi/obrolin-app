import Input from './ui/Input'
import Button from './ui/Button'
import { Link } from 'react-router'
import useInput from '../hooks/useInput'

export default function RegisterForm({ handleRegister }) {
  const [name, setName] = useInput('')
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  return (
    <>
      <div className='mb-5 text-2xl font-semibold'>Register new account</div>
      <Input className="mb-3" label="Nama" id="name" type="name" value={name} onChange={setName}/>
      <Input className="mb-3" label="Email" id="email" type="email" value={email} onChange={setEmail}/>
      <Input className="mb-5" label="Password" id="password" type="password" value={password} onChange={setPassword}/>
      <div className="flex justify-between items-center">
        <div>Sudah punya akun? <Link to='/login' className='text-blue-600'>Login disini</Link></div>
        <Button onClick={() => handleRegister({ name, email, password })}>Register</Button>
      </div>
    </>
  )
}
