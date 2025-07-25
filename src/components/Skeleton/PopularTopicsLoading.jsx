import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PopularTopicsLoading () {
  return (
    <div className='flex gap-3 flex-wrap'>
      <Skeleton height={50} width={100} className='mb-4' />
      <Skeleton height={50} width={100} className='mb-4' />
      <Skeleton height={50} width={100} className='mb-4' />
      <Skeleton height={50} width={100} className='mb-4' />
      <Skeleton height={50} width={100} className='mb-4' />
      <Skeleton height={50} width={100} className='mb-4' />
    </div>
  )
}
