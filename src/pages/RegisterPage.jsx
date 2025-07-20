import Layout from '../Layout'
import Input from '../components/ui/Input'
import { Link } from 'react-router'
import Button from '../components/ui/Button'

export default function RegisterPage() {
  return (
    <Layout>
	  <div className='w-1/2 mx-auto bg-white p-5 rounded-lg shadow mt-10 mb-20'>
        <div className='mb-5 text-2xl font-semibold'>Register new account</div>
	  	<Input className="mb-3" label="Nama" id="name" type="name"/>
	  	<Input className="mb-3" label="Email" id="email" type="email"/>
	  	<Input className="mb-5" label="Password" id="password" type="password"/>
        <div className="flex justify-between items-center">
          <div>Sudah punya akun? <Link to='/login' className='text-blue-600'>Login disini</Link></div>
		  <Button>Register</Button>
        </div>
	  </div>
    </Layout>
  )
}
