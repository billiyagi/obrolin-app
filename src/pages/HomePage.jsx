import Layout from '../Layout'
import Threads from '../components/Threads'
import Aside from '../components/Aside'
import Leaderboards from '../components/Leaderboards'
import PopularTopics from '../components/PopularTopics'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateThreadsAndUsers } from '../states/shared/action'
import { asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, unsetSelectTopics } from '../states/threads/action'
import { setSelectTopics } from '../states/threads/action'
import { asyncReceiveLeaderboards } from '../states/leaderboards/action'

export default function HomePage() {

  const { threads } = useSelector((state) => state.threads)
  const authUser = useSelector((state) => state.authUser)
  const availableTopics = useSelector((state) => state.topics)
  const leaderboards = useSelector((state) => state.leaderboards)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUsers())
    dispatch(asyncReceiveLeaderboards())
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

  const onSelectTopic = (topics, isAlreadySelected) => {
    if(isAlreadySelected) {
      dispatch(unsetSelectTopics())
    } else {
      dispatch(setSelectTopics({ topics }))
    }
  }

  const threadsList = threads && threads.filter((thread) => {
    // Search the selected topics
    const selectedTopic = availableTopics.filter((topic) => topic.isSelected == true)

    if(selectedTopic.length != 0) {
      return thread.category == selectedTopic[0].name
    } 
    return thread
  })

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside/>
        </div>
        <div className='col-span-7 pt-5'>
          <Threads threads={threadsList} onUpVote={onUpVote} onDownVote={onDownVote} onNeutralizeVote={onNeutralize} authUser={authUser}/>
        </div>
        <div className='col-span-4 flex flex-col gap-3 sticky top-0 h-fit pt-5'>
          <Leaderboards leaderboards={leaderboards}/>
          <PopularTopics topics={availableTopics} onSelectTopic={onSelectTopic}/>
        </div>
      </div>
    </Layout>
  )
}
