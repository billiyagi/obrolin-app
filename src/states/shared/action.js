import { getAllThreads } from '../../api/threads'
import { getAllUsers } from '../../api/user'
import { receiveUserActionCreator } from '../user/action'
import { receiveThreadsActionCreator } from '../threads/action'
import { setAvailableTopics } from '../threads/action'

function asyncPopulateThreadsAndUsers() {
  return async(dispatch) => {
    try {
      const threads = await getAllThreads()
      const users = await getAllUsers()

      /** 
       * Combine threads data with Users
      */
      const result = threads.data.data.threads.map((thread) => {
        return {
          ...thread,
          user: users.data.data.users.find((user) => user.id == thread.ownerId),
        }
      })


      /** 
       * Get only Topics Data without duplicate
      */
      const topics = threads.data.data.threads.reduce((acc, thread) => {
        const exists = acc.find((item) => item.name === thread.category)
        if (!exists) {
          acc.push({
            name: thread.category,
            isSelected: false
          })
        }
        return acc
      }, [])

      dispatch(receiveUserActionCreator(users.data.data.users))
      dispatch(receiveThreadsActionCreator({ threads: result }))
      dispatch(setAvailableTopics({ topics }))

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