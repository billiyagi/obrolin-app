import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function LeaderboardLoading() {
  return (
    <div>
	   <Skeleton height={50} className='mb-4'/>
	   <Skeleton height={50} className='mb-4'/>
	   <Skeleton height={50} className='mb-4'/>
    </div>
  )
}
