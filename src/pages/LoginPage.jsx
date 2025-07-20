import Layout from '../Layout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link } from 'react-router'

export default function LoginPage() {
  return (
    <Layout>
	  <div className='w-1/2 mx-auto bg-white p-5 rounded-lg shadow mt-10 mb-20'>
        <div className='mb-5 text-2xl font-semibold'>Login to your account</div>
	  	<Input className="mb-3" label="Nama" id="name" type="name"/>
	  	<Input className="mb-3" label="Email" id="email" type="email"/>
	  	<Input className="mb-5" label="Password" id="password" type="password"/>
        <div className="flex justify-between items-center">
          <div>Tidak punya akun? <Link to='/register' className='text-blue-600'>Daftar disini</Link></div>
		  <Button>Login</Button>
        </div>
	  </div>
    </Layout>
  )
}
