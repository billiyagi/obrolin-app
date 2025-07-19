import { Link } from 'react-router'
export default function TopicItem({ name, url }) {
  return (
    <Link to={url} className='bg-gray-100 shadow rounded-lg p-2 hover:bg-gray-200'>
	  {name}
    </Link>
  )
}
