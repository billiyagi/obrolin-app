import { ActionType } from './action'

function topicsReducer (topics = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_AVAILABLE_TOPICS:
      return action.payload.topics
    case ActionType.SET_SELECT_TOPIC:
      return topics.map((topic) => {
        if (topic.name === action.payload.topics) {
          return {
            ...topic,
            isSelected: true
          }
        } else {
          return {
            ...topic,
            isSelected: false
          }
        }
      })
    case ActionType.UNSET_SELECT_TOPIC:
      return topics.map((topic) => {
        return {
          ...topic,
          isSelected: false
        }
      })
    default:
      return topics
  }
}

export default topicsReducer
