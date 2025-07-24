import { Link } from 'react-router'
import Button from '../../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className='flex justify-center items-center text-center h-screen'>
      <div>
        <div className='text-5xl font-bold text-gray-500 mb-5'>404</div>
        <h1 className='text-3xl font-semibold mb-3'>Oops, Page is Not Found</h1>
        <p className='opacity-75 mb-5'>Page you looking for is not found</p>
        <Link to={'/'}><Button>Back to Home</Button></Link>
      </div>
    </div>
  )
}
