import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

export default function Comments() {
  return (
    <div>
	  <CommentForm/>
	  
	  <div className='my-5 grid grid-cols-1 gap-5'>
        <CommentItem/>
        <CommentItem/>
	  </div>
    </div>
  )
}
