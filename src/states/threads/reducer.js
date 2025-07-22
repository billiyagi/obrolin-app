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
    
    return threads.map((thread) => {
      console.log('reducerthread', thread.upVotesBy)
      console.log('userid', action.payload.userId)
      if(thread.id == action.payload.threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.includes(action.payload.userId) ? thread.upVotesBy.filter((id) => id !== action.payload.userId) : [...thread.upVotesBy, action.payload.userId]
        }
      }

      return thread
    })
  default:
    return threads
  }
}

export default threadsReducer