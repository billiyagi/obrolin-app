import { describe, it, expect } from 'vitest'
import userReducer from '../../src/states/user/reducer'
import { ActionType } from '../../src/states/user/action'

describe('userReducer', () => {
  it('should return initial state when no action is provided', () => {
    const initialState = []
    const action = {}
    const nextState = userReducer(initialState, action)
    expect(nextState).toEqual(initialState)
  })

  it('should handle REGISTER_USER', () => {
    const initialState = []
    const action = {
      type: ActionType.REGISTER_USER,
      payload: {
        user: { id: '1', name: 'John Doe', email: 'john@example.com' }
      }
    }
    const nextState = userReducer(initialState, action)
    expect(nextState).toEqual({ id: '1', name: 'John Doe', email: 'john@example.com' })
  })

  it('should handle RECEIVE_USER', () => {
    const initialState = []
    const action = {
      type: ActionType.RECEIVE_USER,
      payload: {
        user: { id: '2', name: 'Jane Doe', email: 'jane@example.com' }
      }
    }
    const nextState = userReducer(initialState, action)
    expect(nextState.name).toBe('Jane Doe')
    expect(nextState.email).toBe('jane@example.com')
  })
})
