import Input from '../components/ui/Input'
import { Link } from 'react-router'
import Button from '../components/ui/Button'
import { useForm } from 'react-hook-form'

export default function LoginForm ({ handleLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    handleLogin(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid='login-form'>
      <div className='mb-5 text-2xl font-semibold'>Login to your account</div>
      <Input className='mb-3' label='Email' id='email' type='email' {...register('email', { required: 'Email wajib diisi' })} />
      {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

      <Input className='mb-5' label='Password' id='password' type='password' {...register('password', { required: 'Password wajib diisi' })} />
      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

      <div className='flex justify-between items-center'>
        <div>Tidak punya akun? <Link to='/register' className='text-blue-600'>Daftar disini</Link></div>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  )
}
