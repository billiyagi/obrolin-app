import { describe, it, expect } from 'vitest'
import topicsReducer from '../../src/states/threads/topicsReducer'
import { ActionType } from '../../src/states/threads/action'

describe('topicsReducer', () => {
  it('should return initial state when no action is provided', () => {
    const initialState = []
    const action = {}
    const nextState = topicsReducer(initialState, action)
    expect(nextState).toEqual(initialState)
  })

  it('should handle SET_AVAILABLE_TOPICS', () => {
    const initialState = []
    const action = {
      type: ActionType.SET_AVAILABLE_TOPICS,
      payload: {
        topics: [
          { name: 'Tech', isSelected: false },
          { name: 'Science', isSelected: false }
        ]
      }
    }
    const nextState = topicsReducer(initialState, action)
    expect(nextState).toHaveLength(2)
    expect(nextState[0].name).toBe('Tech')
  })

  it('should handle SET_SELECT_TOPIC and mark only one selected', () => {
    const initialState = [
      { name: 'Tech', isSelected: false },
      { name: 'Science', isSelected: false }
    ]
    const action = {
      type: ActionType.SET_SELECT_TOPIC,
      payload: { topics: 'Science' }
    }
    const nextState = topicsReducer(initialState, action)

    const selected = nextState.find(t => t.isSelected)
    expect(selected.name).toBe('Science')
    expect(nextState[0].isSelected).toBe(false)
  })

  it('should handle UNSET_SELECT_TOPIC and unselect all', () => {
    const initialState = [
      { name: 'Tech', isSelected: true },
      { name: 'Science', isSelected: false }
    ]
    const action = { type: ActionType.UNSET_SELECT_TOPIC }
    const nextState = topicsReducer(initialState, action)

    expect(nextState.every(t => t.isSelected === false)).toBe(true)
  })
})
