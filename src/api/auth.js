import axios from 'axios'
import ENDPOINTS from './endpoints'

async function login({ email, password }) {
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
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error occurred')
    }
  }
}

async function register({ name, email, password }) {
  try {
    return await axios.post(
      ENDPOINTS.auth.login(),
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
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error occurred')
    }
  }
}

export { login, register }
