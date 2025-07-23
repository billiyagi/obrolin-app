import Layout from '../Layout'
import Threads from '../components/Threads'
import Aside from '../components/Aside'
import Leaderboards from '../components/Leaderboards'
import PopularTopics from '../components/PopularTopics'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateThreadsAndUsers } from '../states/shared/action'
import { asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread } from '../states/threads/action'

export default function HomePage() {

  const { threads } = useSelector((state) => state.threads)
  const authUser = useSelector((state) => state.authUser)
  console.log('authUser', authUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUsers())
  }, [dispatch])
  

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId))
  }
  
  const onDownVote = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId))
  }

  const onNeutralize = (threadId) => {
    dispatch(asyncToggleNeutralizeVoteThread(threadId))
  }

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside/>
        </div>
        <div className='col-span-7 pt-5'>
          <Threads threads={threads} onUpVote={onUpVote} onDownVote={onDownVote} onNeutralizeVote={onNeutralize} authUser={authUser}/>
        </div>
        <div className='col-span-4 flex flex-col gap-3 sticky top-0 h-fit pt-5'>
          <Leaderboards/>
          <PopularTopics/>
        </div>
      </div>
    </Layout>
  )
}
