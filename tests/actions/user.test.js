import { describe, it, expect, vi } from 'vitest'
import { asyncRegisterUser, setUserRegister } from '../../src/states/user/action'
import * as authApi from '../../src/api/auth'

// Mock fungsi register di API
vi.mock('../../src/api/auth', () => ({
  register: vi.fn()
}))

describe('asyncRegisterUser thunk', () => {
  it('should dispatch REGISTER_USER when API call is successful', async () => {
    const fakeUser = { id: '1', name: 'John', email: 'john@example.com' }

    // mock API register untuk return fake user
    authApi.register.mockResolvedValue(fakeUser)

    const dispatch = vi.fn()
    const thunk = asyncRegisterUser({ name: 'John', email: 'john@example.com', password: '123456' })

    const result = await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setUserRegister(fakeUser))
    expect(result).toEqual({
      status: true,
      message: 'Register Success'
    })
  })

  it('should return error message when API call fails', async () => {
    authApi.register.mockRejectedValue(new Error('Email already exists'))

    const dispatch = vi.fn()
    const thunk = asyncRegisterUser({ name: 'Jane', email: 'jane@example.com', password: '123456' })

    const result = await thunk(dispatch)

    expect(dispatch).not.toHaveBeenCalled()
    expect(result).toEqual({
      status: false,
      message: 'Email already exists'
    })
  })
})
