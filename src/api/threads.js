import ENDPOINTS from './endpoints'
import { fetchWithAuth } from '../utils/network-data'
import axios from 'axios'

async function getAllThreads() {
  return await axios.get(ENDPOINTS.threads.all())
}

async function getThreadById(threadId) {
  return await axios.get(ENDPOINTS.threads.byId(threadId))
}

async function createThread({ title, body, category }) {
  console.log({ title, body, category })
  return await fetchWithAuth({
    url: ENDPOINTS.threads.create(),
    method: 'POST',
    data: { title, body ,category }
  })
}

async function toggleUpVoteThread(id) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.up(id),
    method: 'POST',
  })
}

async function toggleDownVoteThread(id) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.down(id),
    method: 'POST',
  })
}

async function toggleNeutralizeVoteThread(id) {
  return await fetchWithAuth({
    url: ENDPOINTS.votes.neutral(id),
    method: 'POST',
  })
}

export { getAllThreads, getThreadById, createThread, toggleUpVoteThread, toggleDownVoteThread, toggleNeutralizeVoteThread }