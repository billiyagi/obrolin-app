import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

export default function Comments({ comments, onCreateComment, threadId, onDownVoteComment, onUpVoteComment, onNeutralizeComment }) {
  return (
    <div>
	  <CommentForm onCreateComment={onCreateComment} threadId={threadId}/>
	  
	  <div className='my-5 grid grid-cols-1 gap-5'>
        {comments.map((comment) => <CommentItem id={comment.id} threadId={threadId} key={comment.id} content={comment.content} createdAt={comment.createdAt} downVotes={comment.downVotesBy} upVotes={comment.upVotesBy} user={comment.owner} onDownVote={onDownVoteComment} onUpVote={onUpVoteComment} onNeutralizeVote={onNeutralizeComment}/>)}
	  </div>
    </div>
  )
}
