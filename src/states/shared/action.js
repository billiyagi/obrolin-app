import { getAllThreads } from '../../api/threads'
import { getAllUsers } from '../../api/user'
import { receiveUserActionCreator } from '../user/action'
import { receiveThreadsActionCreator } from '../threads/action'

function asyncPopulateThreadsAndUsers() {
  return async(dispatch) => {
    try {
      const threads = await getAllThreads()
      const users = await getAllUsers()
      dispatch(receiveUserActionCreator(users.data.data.users))
      dispatch(receiveThreadsActionCreator(threads.data.data.threads))

      return {
        status: true,
        message: 'Received threads'
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export { asyncPopulateThreadsAndUsers }