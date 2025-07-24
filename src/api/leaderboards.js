import axios from 'axios'
import ENDPOINTS from './endpoints'

async function getAllLeaderboards() {
  return await axios.get(ENDPOINTS.leaderboards.all())
}

export { getAllLeaderboards }