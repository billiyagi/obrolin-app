import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

export default function Comments({ comments }) {
  return (
    <div>
	  <CommentForm/>
	  
	  <div className='my-5 grid grid-cols-1 gap-5'>
        {comments.map((comment) => <CommentItem id={comment.id} key={comment.id} content={comment.content} createdAt={comment.createdAt} downVotes={comment.downVotesBy} upVotes={comment.upVotesBy} user={comment.owner}/>)}
	  </div>
    </div>
  )
}
