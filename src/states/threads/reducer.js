import { ActionType } from './action'

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads
  case ActionType.ADD_THREAD:
    return action.payload.threads
  case ActionType.DETAIL_THREAD:
    return action.payload.threads
  case ActionType.TOGGLE_UP_VOTE_THREAD:
    if(threads.threads) {
      const upVoteThreads = threads.threads.map((thread) => {
      /** 
       * Logic
       * - if downvote exist user, then delete at upvote
       * - if upvote exist user, then delete at downvote
      */
        if(thread.id == action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId) ? thread.upVotesBy.filter((id) => id !== action.payload.userId) : [...thread.upVotesBy, action.payload.userId],
            downVotesBy: thread.downVotesBy.includes(action.payload.userId) ? thread.downVotesBy.filter((id) => id !== action.payload.userId) : [...thread.downVotesBy]
          }
        }

        return thread
      })

      return action.payload = {
        threads: upVoteThreads
      }
    }

    const upVoteDetailThread = {
      ...threads.detail,
      upVotesBy: threads.detail.upVotesBy.includes(action.payload.userId) ? threads.detail.upVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.upVotesBy, action.payload.userId],
      downVotesBy: threads.detail.downVotesBy.includes(action.payload.userId) ? threads.detail.downVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.downVotesBy]
    }

    return action.payload = {
      detail: upVoteDetailThread
    }
  case ActionType.TOGGLE_DOWN_VOTE_THREAD:
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

    const downVoteDetailThread = {
      ...threads.detail,
      downVotesBy: threads.detail.downVotesBy.includes(action.payload.userId) ? threads.detail.downVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.downVotesBy, action.payload.userId],
      upVotesBy: threads.detail.upVotesBy.includes(action.payload.userId) ? threads.detail.upVotesBy.filter((id) => id !== action.payload.userId) : [...threads.detail.upVotesBy]
    }

    return action.payload = {
      detail: downVoteDetailThread
    }

  case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD:
    if(threads.threads) {
      const neutralizeVoteThread = threads.threads.map((thread) => {
      /** 
       * Logic
       * - if downvote exist user, then delete
       * - if upvote exist user, then delete
      */
        if(thread.id == action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId)
          }
        }

        return thread
      })

      return action.payload = {
        threads: neutralizeVoteThread
      }
    } 

    const neutralizeVoteDetailThread = {
      ...threads.detail,
      downVotesBy: threads.detail.downVotesBy.filter((id) => id !== action.payload.userId),
      upVotesBy: threads.detail.upVotesBy.filter((id) => id !== action.payload.userId)
    }

    return action.payload = {
      detail: neutralizeVoteDetailThread
    }
  default:
    return threads
  }
}

export default threadsReducer