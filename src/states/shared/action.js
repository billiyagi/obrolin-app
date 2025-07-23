import { getAllThreads } from '../../api/threads'
import { getAllUsers } from '../../api/user'
import { receiveUserActionCreator } from '../user/action'
import { receiveThreadsActionCreator } from '../threads/action'

function asyncPopulateThreadsAndUsers() {
  return async(dispatch) => {
    try {
      const threads = await getAllThreads()
      const users = await getAllUsers()

      const result = threads.data.data.threads.map((thread) => {
        return {
          ...thread,
          user: users.data.data.users.find((user) => user.id == thread.ownerId),
        }
      })

      dispatch(receiveUserActionCreator(users.data.data.users))
      dispatch(receiveThreadsActionCreator({ threads: result }))

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