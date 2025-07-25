import { ActionType } from './action'

function createThreadReducer (threads = {}, action = {}) {
  switch (action.type) {
    case ActionType.ADD_THREAD:
      return action.payload.threads
    default:
      return threads
  }
}

export default createThreadReducer
