/**
 * Skenario Pengujian:
 * - asyncReceiveThreads:
 *   - Harus dispatch RECEIVE_THREADS saat sukses.
 * - asyncAddThreads:
 *   - Harus dispatch ADD_THREAD saat sukses.
 *   - Harus meng-handle error jika gagal.
 * - asyncAddComment:
 *   - Harus dispatch ADD_COMMENT saat sukses.
 * - asyncToggleUpVoteThread:
 *   - Harus dispatch TOGGLE_UP_VOTE_THREAD dengan benar.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  asyncReceiveThreads,
  asyncAddThreads,
  asyncAddComment,
  asyncToggleUpVoteThread,
  receiveThreadsActionCreator,
  addThreadsActionCreator,
  addCommentActionCreator,
  ActionType
} from '../../src/states/threads/action'

import * as threadsApi from '../../src/api/threads'
import * as commentApi from '../../src/api/comment'

// Mock semua API
vi.mock('../../src/api/threads', () => ({
  getAllThreads: vi.fn(),
  createThread: vi.fn(),
  toggleUpVoteThread: vi.fn(),
  getThreadById: vi.fn()
}))
vi.mock('../../src/api/comment', () => ({
  createComment: vi.fn()
}))

describe('threads thunks', () => {
  let dispatch
  let getState

  beforeEach(() => {
    dispatch = vi.fn()
    getState = vi.fn(() => ({ authUser: { id: 'user-1' } }))
    vi.clearAllMocks()
  })

  it('asyncReceiveThreads should dispatch RECEIVE_THREADS on success', async () => {
    const fakeThreads = [{ id: 'thread-1', title: 'Test Thread' }]
    threadsApi.getAllThreads.mockResolvedValue({ data: fakeThreads })

    const thunk = asyncReceiveThreads()
    const result = await thunk(dispatch)

    expect(threadsApi.getAllThreads).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator({ threads: fakeThreads }))
    expect(result.status).toBe(true)
  })

  it('asyncAddThreads should dispatch ADD_THREAD on success', async () => {
    const fakeThread = { id: 'thread-1', title: 'New Thread' }
    threadsApi.createThread.mockResolvedValue({ data: { data: { thread: fakeThread } } })

    const thunk = asyncAddThreads({ title: 'New Thread', body: 'Body', category: 'General' })
    const result = await thunk(dispatch)

    expect(threadsApi.createThread).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(addThreadsActionCreator(fakeThread))
    expect(result.status).toBe(true)
  })

  it('asyncAddComment should dispatch ADD_COMMENT on success', async () => {
    const fakeComment = { id: 'comment-1', content: 'Nice!' }
    commentApi.createComment.mockResolvedValue({ data: { data: { comment: fakeComment } } })

    const thunk = asyncAddComment({ content: 'Nice!', threadId: 'thread-1' })
    const result = await thunk(dispatch)

    expect(commentApi.createComment).toHaveBeenCalledWith({ content: 'Nice!', threadId: 'thread-1' })
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator({ threadId: 'thread-1', comment: fakeComment }))
    expect(result.status).toBe(true)
  })

  it('asyncToggleUpVoteThread should dispatch TOGGLE_UP_VOTE_THREAD', async () => {
    threadsApi.toggleUpVoteThread.mockResolvedValue({})

    const thunk = asyncToggleUpVoteThread('thread-1')
    await thunk(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.TOGGLE_UP_VOTE_THREAD,
      payload: { threadId: 'thread-1', userId: 'user-1' }
    })
    expect(threadsApi.toggleUpVoteThread).toHaveBeenCalledWith('thread-1')
  })

  it('asyncAddThreads should handle error case', async () => {
    threadsApi.createThread.mockRejectedValue(new Error('Failed'))
    const thunk = asyncAddThreads({ title: 'Error', body: 'Body', category: 'General' })

    const result = await thunk(dispatch)
    expect(result.status).toBe(false)
    expect(result.message).toBe('Failed')
  })
})
