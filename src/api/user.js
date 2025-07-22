import ENDPOINTS from './endpoints'
import { fetchWithAuth } from '../utils/network-data'

async function getOwnProfile() {
  return await fetchWithAuth({
    url: ENDPOINTS.auth.profile(),
    method: 'GET'
  })
}

async function getAllUsers() {
  return await fetchWithAuth({
    url: ENDPOINTS.users.all(),
    method: 'GET'
  })
}

export { getOwnProfile, getAllUsers }