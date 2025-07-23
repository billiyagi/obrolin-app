import { getAllThreads, getThreadById, createThread, toggleUpVoteThread, toggleDownVoteThread, toggleNeutralizeVoteThread } from '../../api/threads'
import { createComment, upVoteComment, downVoteComment, neutralizeVoteComment } from '../../api/comment'
const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  DETAIL_THREAD: 'DETAIL_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRALIZE_VOTE_THREAD: 'TOGGLE_NEUTRALIZE_VOTE_THREAD',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRALIZE_VOTE_COMMENT: 'TOGGLE_NEUTRALIZE_VOTE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
}

function toggleDownCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleUpCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleNeutralizeCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleNeutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadsActionCreator(threads) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      threads
    }
  }
}

function detailThreadActionCreator(threads) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      threads
    }
  }
}

function addCommentActionCreator({ threadId, comment }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      comment
    }
  }
}

function asyncAddComment({ content, threadId }){
  return async(dispatch) => {
    try {      
      const comment = await createComment({ content, threadId })
      dispatch(addCommentActionCreator({ threadId, comment: comment.data.data.comment }))

      return {
        status: true,
        message: 'Successfully add new commment'
      }
    } catch(error) {
      return {
        status: true,
        message: error.message
      }
    }
  }
}

function asyncDetailThread(threadId) {
  return async(dispatch) => {
    try {
      const thread = await getThreadById(threadId)
      dispatch(detailThreadActionCreator({ detail: thread.data.data.detailThread }))
    } catch (error) {
      throw Error(error)
    }
  }
}

function asyncAddThreads({ title, body, category }) {
  return async(dispatch) => {
    try {
      const thread = await createThread({ title, body, category })
      dispatch(addThreadsActionCreator(thread.data.data.thread))
      return {
        status: true,
        message: 'Successfuly create new thread'
      }
    } catch(error) {
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncReceiveThreads() {
  return async(dispatch) => {
    try {
      const threads = await getAllThreads()
      dispatch(receiveThreadsActionCreator({ threads: threads.data }))
      return {
        status: true,
        message: 'Received threads'
      }
    } catch(error) {
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleUpVoteThread(threadId) {
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }))

    try {
      await toggleUpVoteThread(threadId)
    } catch(error) {
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleDownVoteThread(threadId) {
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }))

    try {
      await toggleDownVoteThread(threadId)
    } catch(error) {
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleNeutralizeVoteThread(threadId) {
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }))

    try {
      await toggleNeutralizeVoteThread(threadId)
    } catch(error) {
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleUpCommentThread({ threadId, commentId }) {
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleUpCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    try {
      await upVoteComment({ threadId, commentId })
    } catch(error) {
      dispatch(toggleUpCommentActionCreator({ threadId, commentId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleDownCommentThread({ threadId, commentId }) {
  
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleDownCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    try {
      await downVoteComment({ threadId, commentId })
    } catch(error) {
      dispatch(toggleDownCommentActionCreator({ threadId, commentId }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

function asyncToggleNeutralizeCommentThread({ threadId, commentId }) {
  return async(dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleNeutralizeCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    try {
      await neutralizeVoteComment({ threadId, commentId })
    } catch(error) {
      dispatch(toggleNeutralizeCommentActionCreator({ threadId, commentId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export { receiveThreadsActionCreator, addThreadsActionCreator, asyncAddThreads, asyncReceiveThreads, asyncDetailThread, ActionType, asyncToggleUpVoteThread, asyncToggleDownVoteThread,asyncToggleNeutralizeVoteThread, addCommentActionCreator, asyncAddComment, asyncToggleUpCommentThread, asyncToggleDownCommentThread, asyncToggleNeutralizeCommentThread, toggleUpCommentActionCreator, toggleDownCommentActionCreator, toggleNeutralizeCommentActionCreator }