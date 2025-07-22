import Layout from '../Layout'
import ThreadItem from '../components/Threads/ThreadItem'
import Aside from '../components/Aside'
import Comments from '../components/Comments'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { asyncDetailThread } from '../states/threads/action'
import { useEffect } from 'react'

export default function DetailThreadPage() {
  const params = useParams()
  const dispatch = useDispatch()
  const thread = useSelector((state) => state.threads)?.thread?.detailThread
  useEffect(() => {
    dispatch(asyncDetailThread(params.id))
  }, [dispatch, params])

  console.log('detail', thread)



  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside isBack/>
        </div>
        <div className='col-span-11 pt-5'>
          {thread ? <>
            <ThreadItem key={thread.id} id={thread.id} title={thread.title} body={thread.body} topic={thread.category} createdAt={thread.createdAt} upVotes={thread.upVotesBy} downVotes={thread.downVotesBy} user={thread.owner}/>
            <Comments comments={thread.comments}/>
          </> : <>Oops Something wrong</>}
          
        </div>
      </div>
    </Layout>
  )
}
