import { describe, it, expect, vi, beforeEach } from 'vitest'
import { asyncPreloadProcess, setIsPreloadActionCreator, ActionType } from '../../src/states/isPreload/action'
import { setAuthUserActionCreator } from '../../src/states/authUser/action'
import * as userApi from '../../src/api/user'

// Mock API dan action lain
vi.mock('../../src/api/user', () => ({
  getOwnProfile: vi.fn()
}))
vi.mock('../../src/states/authUser/action', () => ({
  setAuthUserActionCreator: vi.fn((user) => ({
    type: 'SET_AUTH_USER',
    payload: { authUser: user }
  }))
}))

describe('isPreload actions', () => {
  let dispatch

  beforeEach(() => {
    dispatch = vi.fn()
    vi.clearAllMocks()
  })

  it('setIsPreloadActionCreator should create correct action', () => {
    const action = setIsPreloadActionCreator(true)
    expect(action).toEqual({
      type: ActionType.SET_IS_PRELOAD,
      payload: { isPreload: true }
    })
  })

  it('asyncPreloadProcess should dispatch authUser on success', async () => {
    const fakeUser = { id: 'user-1', name: 'John' }
    userApi.getOwnProfile.mockResolvedValue({
      data: { data: { user: fakeUser } }
    })

    const thunk = asyncPreloadProcess()
    await thunk(dispatch)

    expect(userApi.getOwnProfile).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUser))
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.SET_IS_PRELOAD,
      payload: { isPreload: false }
    })
  })

  it('asyncPreloadProcess should handle error and set authUser to null', async () => {
    userApi.getOwnProfile.mockRejectedValue(new Error('Network error'))

    const thunk = asyncPreloadProcess()
    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null))
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.SET_IS_PRELOAD,
      payload: { isPreload: false }
    })
  })
})
