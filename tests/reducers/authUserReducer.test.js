/**
 * Skenario pengujian authUserReducer:
 *
 * 1. should return initial state when action unknown
 *    - diberikan state awal null
 *    - ketika reducer dipanggil dengan action type UNKNOWN
 *    - maka state selanjutnya tetap null
 *
 * 2. should set authUser when SET_AUTH_USER action dispatched
 *    - diberikan state awal null
 *    - ketika action dengan type SET_AUTH_USER dan payload user dipanggil
 *    - maka state selanjutnya menjadi user tersebut
 *
 * 3. should unset authUser when UNSET_AUTH_USER action dispatched
 *    - diberikan state awal berisi user
 *    - ketika action UNSET_AUTH_USER dipanggil
 *    - maka state selanjutnya menjadi null
 */

import { describe, it, expect } from 'vitest'
import authUserReducer from '../../src/states/authUser/reducer'
import { ActionType } from '../../src/states/authUser/action'

describe('authUserReducer', () => {
  it('should return initial state when action unknown', () => {
    const initialState = null
    const action = { type: 'UNKNOWN' }
    const nextState = authUserReducer(initialState, action)
    expect(nextState).toBe(initialState)
  })

  it('should set authUser when SET_AUTH_USER action dispatched', () => {
    const initialState = null
    const mockUser = { id: 'user-1', name: 'John Doe' }
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: { authUser: mockUser }
    }

    const nextState = authUserReducer(initialState, action)
    expect(nextState).toEqual(mockUser)
  })

  it('should unset authUser when UNSET_AUTH_USER action dispatched', () => {
    const initialState = { id: 'user-1', name: 'John Doe' }
    const action = { type: ActionType.UNSET_AUTH_USER }

    const nextState = authUserReducer(initialState, action)
    expect(nextState).toBe(null)
  })
})
