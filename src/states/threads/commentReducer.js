import { ActionType } from './action'

function commentReducer(threads = {}, action = {}) {
  switch (action.type) {
  case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
    console.log(threads, action)
    const downVoteComments = threads.detail.comments.map((comment) => {
      if(comment.id == action.payload.commentId) {
        return {
          ...comment,
          downVotesBy: comment.downVotesBy.includes(action.payload.userId) ? comment.downVotesBy.filter((id) => id !== action.payload.userId) : [...comment.downVotesBy, action.payload.userId],
        }
      }
    })

    console.log(downVoteComments, threads)

    return action.payload.threads

    return {
      ...threads,
      detail: {
        ...threads.detail,
        comments: [action.payload.comment, ...threads.detail.comments],
      },
    }


    if(threads.threads) {
      const downVoteThreads = threads.threads.map((thread) => {
      /** 
       * Logic
       * - if downvote exist user, then delete at upvote
       * - if upvote exist user, then delete at downvote
      */
        if(thread.id == action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId) ? thread.downVotesBy.filter((id) => id !== action.payload.userId) : [...thread.downVotesBy, action.payload.userId],
            upVotesBy: thread.upVotesBy.includes(action.payload.userId) ? thread.upVotesBy.filter((id) => id !== action.payload.userId) : [...thread.upVotesBy]
          }
        }

        return thread
      })

      return action.payload = {
        threads: downVoteThreads
      }
    }

    // const downVoteDetailThread = {
    //   ...threads.detail,
    //   downVotesBy: threads.detail.downVotesBy.includes(action.payload.userId) ? threads.detail.downVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.downVotesBy, action.payload.userId],
    //   upVotesBy: threads.detail.upVotesBy.includes(action.payload.userId) ? threads.detail.upVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.upVotesBy]
    // }

    // return action.payload = {
    //   detail: downVoteDetailThread
    // }

    return action.payload.threads
  default:
    return threads
  }
}

export default commentReducer