import ThreadItem from './ThreadItem'

export default function Threads({ threads, onUpVote, onDownVote, onNeutrelizeVote, authUser }) {
  return (
    <div>
      {threads ? threads.map((thread) => <ThreadItem key={thread.id} id={thread.id} title={thread.title} body={thread.body} topic={thread.category} createdAt={thread.createdAt} upVotes={thread.upVotesBy} downVotes={thread.downVotesBy} user={thread.user} totalComments={thread.totalComments} onUpVote={onUpVote} authUser={authUser}/>) : <>Oops Something wrong</>}
    </div>
  )
}
