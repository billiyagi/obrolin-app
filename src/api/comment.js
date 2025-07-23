import ENDPOINTS from './endpoints'
import { fetchWithAuth } from '../utils/network-data'

async function createComment({ content, threadId }) {
  return await fetchWithAuth({
    url: ENDPOINTS.comments.create(threadId),
    method: 'POST',
    data: { content }
  })
}

async function upVoteComment({ threadId, commentId }) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.comment.up(threadId, commentId),
    method: 'POST',
  })
}

async function downVoteComment({ threadId, commentId }) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.comment.down(threadId, commentId),
    method: 'POST',
  })
}

async function neutralizeVoteComment({ threadId, commentId }) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.comment.neutral(threadId, commentId),
    method: 'POST',
  })
}

export { createComment, upVoteComment, downVoteComment, neutralizeVoteComment }