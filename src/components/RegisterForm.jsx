import Input from './ui/Input'
import Button from './ui/Button'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'

export default function RegisterForm ({ handleRegister }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    handleRegister(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5 text-2xl font-semibold'>Register new account</div>
      <Input className='mb-3' label='Nama' id='name' type='name' {...register('name', { required: 'Nama wajib diisi' })} />
      {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}

      <Input className='mb-3' label='Email' id='email' type='email' {...register('email', { required: 'Email wajib diisi' })} />
      {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

      <Input className='mb-5' label='Password' id='password' type='password' {...register('password', { required: 'Password wajib diisi' })} />
      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

      <div className='flex justify-between items-center'>
        <div>Sudah punya akun? <Link to='/login' className='text-blue-600'>Login disini</Link></div>
        <Button type='submit'>Register</Button>
      </div>
    </form>
  )
}
