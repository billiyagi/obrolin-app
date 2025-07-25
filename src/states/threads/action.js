import { getAllThreads, getThreadById, createThread, toggleUpVoteThread, toggleDownVoteThread, toggleNeutralizeVoteThread } from '../../api/threads'
import { createComment, upVoteComment, downVoteComment, neutralizeVoteComment } from '../../api/comment'
import { showLoading, hideLoading } from '@dimasmds/react-redux-loading-bar'
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
  SET_SELECT_TOPIC: 'SET_SELECT_TOPIC',
  UNSET_SELECT_TOPIC: 'UNSET_SELECT_TOPIC',
  SET_AVAILABLE_TOPICS: 'SET_AVAILABLE_TOPICS'
}

function setAvailableTopicsActionCreator ({ topics }) {
  return {
    type: ActionType.SET_AVAILABLE_TOPICS,
    payload: {
      topics
    }
  }
}

function setSelectTopicsActionCreator ({ topics }) {
  return {
    type: ActionType.SET_SELECT_TOPIC,
    payload: {
      topics
    }
  }
}

function unsetSelectTopicsActionCreator () {
  return {
    type: ActionType.UNSET_SELECT_TOPIC
  }
}

function toggleDownCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleUpCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleNeutralizeCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleNeutralizeVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleUpVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleDownVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadsActionCreator (threads) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      threads
    }
  }
}

function detailThreadActionCreator (threads) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      threads
    }
  }
}

function addCommentActionCreator ({ threadId, comment }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      comment
    }
  }
}

function setSelectTopics ({ topics }) {
  return (dispatch) => {
    dispatch(setSelectTopicsActionCreator({ topics }))
  }
}

function setAvailableTopics ({ topics }) {
  return (dispatch) => {
    dispatch(setAvailableTopicsActionCreator({ topics }))
  }
}

function asyncAddComment ({ content, threadId }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const comment = await createComment({ content, threadId })
      dispatch(addCommentActionCreator({ threadId, comment: comment.data.data.comment }))
      return {
        status: true,
        message: 'Successfully add new commment'
      }
    } catch (error) {
      return {
        status: true,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncDetailThread (threadId) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await getThreadById(threadId)
      dispatch(detailThreadActionCreator({ detail: thread.data.data.detailThread }))
    } catch (error) {
      throw Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncAddThreads ({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await createThread({ title, body, category })
      dispatch(addThreadsActionCreator(thread.data.data.thread))
      return {
        status: true,
        message: 'Successfuly create new thread'
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncReceiveThreads () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const threads = await getAllThreads()
      dispatch(receiveThreadsActionCreator({ threads: threads.data }))
      return {
        status: true,
        message: 'Received threads'
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleUpVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }))
    dispatch(showLoading())

    try {
      await toggleUpVoteThread(threadId)
    } catch (error) {
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleDownVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }))
    dispatch(showLoading())

    try {
      await toggleDownVoteThread(threadId)
    } catch (error) {
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleNeutralizeVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }))
    dispatch(showLoading())
    try {
      await toggleNeutralizeVoteThread(threadId)
    } catch (error) {
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleUpCommentThread ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleUpCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    dispatch(showLoading())

    try {
      await upVoteComment({ threadId, commentId })
    } catch (error) {
      dispatch(toggleUpCommentActionCreator({ threadId, commentId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleDownCommentThread ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleDownCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    dispatch(showLoading())
    try {
      await downVoteComment({ threadId, commentId })
    } catch (error) {
      dispatch(toggleDownCommentActionCreator({ threadId, commentId }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleNeutralizeCommentThread ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleNeutralizeCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    dispatch(showLoading())

    try {
      await neutralizeVoteComment({ threadId, commentId })
    } catch (error) {
      dispatch(toggleNeutralizeCommentActionCreator({ threadId, commentId, userId: authUser.id }))
      return {
        status: false,
        message: error.message
      }
    } finally {
      dispatch(hideLoading())
    }
  }
}

function unsetSelectTopics () {
  return (dispatch) => {
    dispatch(unsetSelectTopicsActionCreator())
  }
}

export { receiveThreadsActionCreator, addThreadsActionCreator, asyncAddThreads, asyncReceiveThreads, asyncDetailThread, ActionType, asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, addCommentActionCreator, asyncAddComment, asyncToggleUpCommentThread, asyncToggleDownCommentThread, asyncToggleNeutralizeCommentThread, toggleUpCommentActionCreator, toggleDownCommentActionCreator, toggleNeutralizeCommentActionCreator, setSelectTopics, setAvailableTopics, unsetSelectTopicsActionCreator, unsetSelectTopics }
