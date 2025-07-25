import { ActionType } from './action'

function threadsReducer (threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
    case ActionType.ADD_THREAD:
    case ActionType.DETAIL_THREAD:
      return action.payload.threads

    case ActionType.ADD_COMMENT: {
      if (!threads.detail) return threads
      return {
        ...threads,
        detail: {
          ...threads.detail,
          comments: [action.payload.comment, ...threads.detail.comments]
        }
      }
    }

    case ActionType.TOGGLE_UP_VOTE_THREAD: {
      if (threads.threads) {
        const updatedThreads = threads.threads.map((thread) => {
          if (thread.id === action.payload.threadId) {
            return {
              ...thread,
              upVotesBy: thread.upVotesBy.includes(action.payload.userId)
                ? thread.upVotesBy.filter(id => id !== action.payload.userId)
                : [...thread.upVotesBy, action.payload.userId],
              downVotesBy: thread.downVotesBy.filter(id => id !== action.payload.userId)
            }
          }
          return thread
        })
        return { threads: updatedThreads }
      }

      const updatedDetail = {
        ...threads.detail,
        upVotesBy: threads.detail.upVotesBy.includes(action.payload.userId)
          ? threads.detail.upVotesBy.filter(id => id !== action.payload.userId)
          : [...threads.detail.upVotesBy, action.payload.userId],
        downVotesBy: threads.detail.downVotesBy.filter(id => id !== action.payload.userId)
      }
      return { detail: updatedDetail }
    }

    case ActionType.TOGGLE_DOWN_VOTE_THREAD: {
      if (threads.threads) {
        const updatedThreads = threads.threads.map((thread) => {
          if (thread.id === action.payload.threadId) {
            return {
              ...thread,
              downVotesBy: thread.downVotesBy.includes(action.payload.userId)
                ? thread.downVotesBy.filter(id => id !== action.payload.userId)
                : [...thread.downVotesBy, action.payload.userId],
              upVotesBy: thread.upVotesBy.filter(id => id !== action.payload.userId)
            }
          }
          return thread
        })
        return { threads: updatedThreads }
      }

      const updatedDetail = {
        ...threads.detail,
        downVotesBy: threads.detail.downVotesBy.includes(action.payload.userId)
          ? threads.detail.downVotesBy.filter(id => id !== action.payload.userId)
          : [...threads.detail.downVotesBy, action.payload.userId],
        upVotesBy: threads.detail.upVotesBy.filter(id => id !== action.payload.userId)
      }
      return { detail: updatedDetail }
    }

    case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD: {
      if (threads.threads) {
        const updatedThreads = threads.threads.map((thread) => {
          if (thread.id === action.payload.threadId) {
            return {
              ...thread,
              downVotesBy: thread.downVotesBy.filter(id => id !== action.payload.userId),
              upVotesBy: thread.upVotesBy.filter(id => id !== action.payload.userId)
            }
          }
          return thread
        })
        return { threads: updatedThreads }
      }

      const updatedDetail = {
        ...threads.detail,
        downVotesBy: threads.detail.downVotesBy.filter(id => id !== action.payload.userId),
        upVotesBy: threads.detail.upVotesBy.filter(id => id !== action.payload.userId)
      }
      return { detail: updatedDetail }
    }

    case ActionType.TOGGLE_DOWN_VOTE_COMMENT: {
      if (!threads.detail) return threads
      const updatedComments = threads.detail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter(id => id !== action.payload.userId)
              : [...comment.downVotesBy, action.payload.userId],
            upVotesBy: comment.upVotesBy.filter(id => id !== action.payload.userId)
          }
        }
        return comment
      })
      return {
        ...threads,
        detail: {
          ...threads.detail,
          comments: updatedComments
        }
      }
    }

    case ActionType.TOGGLE_UP_VOTE_COMMENT: {
      if (!threads.detail) return threads
      const updatedComments = threads.detail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter(id => id !== action.payload.userId)
              : [...comment.upVotesBy, action.payload.userId],
            downVotesBy: comment.downVotesBy.filter(id => id !== action.payload.userId)
          }
        }
        return comment
      })
      return {
        ...threads,
        detail: {
          ...threads.detail,
          comments: updatedComments
        }
      }
    }

    case ActionType.TOGGLE_NEUTRALIZE_VOTE_COMMENT: {
      if (!threads.detail) return threads
      const updatedComments = threads.detail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.filter(id => id !== action.payload.userId),
            upVotesBy: comment.upVotesBy.filter(id => id !== action.payload.userId)
          }
        }
        return comment
      })
      return {
        ...threads,
        detail: {
          ...threads.detail,
          comments: updatedComments
        }
      }
    }

    default:
      return threads
  }
}

export default threadsReducer
