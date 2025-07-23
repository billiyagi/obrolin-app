import { getAllThreads, getThreadById, createThread, toggleUpVoteThread, toggleDownVoteThread, toggleNeutralizeVoteThread } from '../../api/threads'
const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  DETAIL_THREAD: 'DETAIL_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRALIZE_VOTE_THREAD: 'TOGGLE_NEUTRALIZE_VOTE_THREAD'
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
      dispatch(addThreadsActionCreator(thread.data.data))
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

export { receiveThreadsActionCreator, addThreadsActionCreator, asyncAddThreads, asyncReceiveThreads, asyncDetailThread, ActionType, asyncToggleUpVoteThread, asyncToggleDownVoteThread,asyncToggleNeutralizeVoteThread }