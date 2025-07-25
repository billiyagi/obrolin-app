import Layout from '../Layout'
import ThreadItem from '../components/Threads/ThreadItem'
import Aside from '../components/Aside'
import Comments from '../components/Comments'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { asyncDetailThread, asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, asyncAddComment, asyncToggleDownCommentThread, asyncToggleUpCommentThread, asyncToggleNeutralizeCommentThread } from '../states/threads/action'
import { useEffect } from 'react'
import DetailThreadLoading from '../components/Skeleton/DetailThreadLoading'

export default function DetailThreadPage () {
  const params = useParams()
  const dispatch = useDispatch()
  const thread = useSelector((state) => state.threads.detail)
  const authUser = useSelector((state) => state.authUser)

  useEffect(() => {
    dispatch(asyncDetailThread(params.id))
  }, [dispatch, params])

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId))
  }

  const onDownVote = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId))
  }

  const onNeutralize = (threadId) => {
    dispatch(asyncToggleNeutralizeVoteThread(threadId))
  }

  const onCreateComment = (comment, threadId) => {
    dispatch(asyncAddComment({ content: comment, threadId }))
  }

  const onDownVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleDownCommentThread({ threadId, commentId }))
  }

  const onUpVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleUpCommentThread({ threadId, commentId }))
  }

  const onNeutralizeComment = (threadId, commentId) => {
    dispatch(asyncToggleNeutralizeCommentThread({ threadId, commentId }))
  }

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className='col-span-1 sticky top-0 h-fit pt-5'>
          <Aside isBack />
        </div>
        <div className='col-span-11 pt-5'>
          {thread
            ? (
              <>
                <ThreadItem key={thread.id} id={thread.id} title={thread.title} body={thread.body} topic={thread.category} createdAt={thread.createdAt} upVotes={thread.upVotesBy} downVotes={thread.downVotesBy} user={thread.owner} authUser={authUser} onDownVote={onDownVote} onUpVote={onUpVote} onNeutralize={onNeutralize} totalComments={thread.comments.length} />

                <Comments comments={thread.comments} onCreateComment={onCreateComment} threadId={thread.id} onDownVoteComment={onDownVoteComment} onUpVoteComment={onUpVoteComment} onNeutralizeComment={onNeutralizeComment} />
              </>
              )
            : <DetailThreadLoading />}

        </div>
      </div>
    </Layout>
  )
}
