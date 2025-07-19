import Layout from '../Layout'
import Threads from '../components/Threads'
import Aside from '../components/Aside'
import Leaderboards from '../components/Leaderboards'
import PopularTopics from '../components/PopularTopics'

export default function HomePage() {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside/>
        </div>
        <div className='col-span-7 pt-5'>
          <Threads/>
        </div>
        <div className='col-span-4 flex flex-col gap-3 sticky top-0 h-fit pt-5'>
          <Leaderboards/>
          <PopularTopics/>
        </div>
      </div>
    </Layout>
  )
}
