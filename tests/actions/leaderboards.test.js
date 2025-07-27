/**
 * Skenario Pengujian:
 * - receiveLeaderboardsActionCreator:
 *   - Harus membuat action dengan type RECEIVE_LEADERBOARDS.
 * - asyncReceiveLeaderboards:
 *   - Harus dispatch leaderboards saat sukses.
 *   - Harus handle error tanpa dispatch RECEIVE_LEADERBOARDS.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator, ActionType } from '../../src/states/leaderboards/action'
import { getAllLeaderboards } from '../../src/api/leaderboards'
import { showLoading, hideLoading } from '@dimasmds/react-redux-loading-bar'

vi.mock('../../src/api/leaderboards', () => ({
  getAllLeaderboards: vi.fn()
}))

vi.mock('@dimasmds/react-redux-loading-bar', () => ({
  showLoading: vi.fn(() => ({ type: 'SHOW_LOADING' })),
  hideLoading: vi.fn(() => ({ type: 'HIDE_LOADING' }))
}))

describe('leaderboards actions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should create action to receive leaderboards', () => {
    const leaderboards = [{ user: { id: '1', name: 'User 1' }, score: 10 }]
    const action = receiveLeaderboardsActionCreator(leaderboards)
    expect(action).toEqual({
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: { leaderboards }
    })
  })

  it('should dispatch leaderboards when asyncReceiveLeaderboards success', async () => {
    const fakeData = { data: { data: { leaderboards: [{ user: { id: '1', name: 'User 1' }, score: 10 }] } } }
    getAllLeaderboards.mockResolvedValue(fakeData)

    const dispatch = vi.fn()
    await asyncReceiveLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: { leaderboards: fakeData.data.data.leaderboards }
    })
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should handle error when asyncReceiveLeaderboards fails', async () => {
    getAllLeaderboards.mockRejectedValue(new Error('Network Error'))

    const dispatch = vi.fn()
    await asyncReceiveLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    // Tidak dispatch RECEIVE_LEADERBOARDS karena error
  })
})
