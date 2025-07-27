import { describe, it, expect } from 'vitest'
import threadsReducer from '../../src/states/threads/reducer'
import { ActionType } from '../../src/states/threads/action'

describe('threadsReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const initialState = []
    const action = {}
    const nextState = threadsReducer(initialState, action)
    expect(nextState).toEqual(initialState)
  })

  it('should handle RECEIVE_THREADS', () => {
    const initialState = []
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [{ id: '1', title: 'Test Thread' }]
      }
    }
    const nextState = threadsReducer(initialState, action)
    expect(nextState).toEqual([{ id: '1', title: 'Test Thread' }])
  })

  it('should handle ADD_COMMENT on detail thread', () => {
    const initialState = {
      detail: {
        id: '1',
        title: 'Thread 1',
        comments: []
      }
    }
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: { id: 'c-1', content: 'Nice comment' }
      }
    }
    const nextState = threadsReducer(initialState, action)
    expect(nextState.detail.comments).toHaveLength(1)
    expect(nextState.detail.comments[0].content).toBe('Nice comment')
  })

  it('should toggle upvote on thread list', () => {
    const initialState = {
      threads: [
        { id: '1', upVotesBy: [], downVotesBy: [] }
      ]
    }
    const action = {
      type: ActionType.TOGGLE_UP_VOTE_THREAD,
      payload: {
        threadId: '1',
        userId: 'user-1'
      }
    }
    const nextState = threadsReducer(initialState, action)
    expect(nextState.threads[0].upVotesBy).toContain('user-1')
    expect(nextState.threads[0].downVotesBy).not.toContain('user-1')
  })

  it('should toggle downvote on comment', () => {
    const initialState = {
      detail: {
        id: '1',
        comments: [
          { id: 'c-1', content: 'Comment', upVotesBy: [], downVotesBy: [] }
        ]
      }
    }
    const action = {
      type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
      payload: {
        commentId: 'c-1',
        userId: 'user-1'
      }
    }
    const nextState = threadsReducer(initialState, action)
    expect(nextState.detail.comments[0].downVotesBy).toContain('user-1')
    expect(nextState.detail.comments[0].upVotesBy).not.toContain('user-1')
  })
})
