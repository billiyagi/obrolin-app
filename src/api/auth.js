import axios from 'axios'
import ENDPOINTS from './endpoints'

async function login ({ email, password }) {
  try {
    return await axios.post(
      ENDPOINTS.auth.login(),
      {
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

async function register ({ name, email, password }) {
  try {
    return await axios.post(
      ENDPOINTS.auth.register(),
      {
        name,
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export { login, register }
