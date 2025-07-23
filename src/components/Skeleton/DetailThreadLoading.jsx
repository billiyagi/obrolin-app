import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function DetailThreadLoading() {
  return (
    <div>
	   <Skeleton height={250} className='mb-4'/>
	   <Skeleton height={250} className='mb-4'/>
	   <Skeleton height={250} className='mb-4'/>
    </div>
  )
}
