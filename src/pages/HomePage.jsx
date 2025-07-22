import Layout from '../Layout'
import Threads from '../components/Threads'
import Aside from '../components/Aside'
import Leaderboards from '../components/Leaderboards'
import PopularTopics from '../components/PopularTopics'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateThreadsAndUsers } from '../states/shared/action'
import { asyncToggleUpVoteThread } from '../states/threads/action'

export default function HomePage() {

  const threads = useSelector((state) => state.threads)
  const users = useSelector((state) => state.user)
  const authUser =useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUsers())
  }, [dispatch])

  const threadList = threads.map((thread) => {
    return {
      ...thread,
      user: users.find((user) => user.id == thread.ownerId),
      authUser: authUser.id
    }
  })

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId))
  }

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside/>
        </div>
        <div className='col-span-7 pt-5'>
          <Threads threads={threadList} onUpVote={onUpVote} authUser={authUser}/>
        </div>
        <div className='col-span-4 flex flex-col gap-3 sticky top-0 h-fit pt-5'>
          <Leaderboards/>
          <PopularTopics/>
        </div>
      </div>
    </Layout>
  )
}
