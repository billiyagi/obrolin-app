import axios from 'axios'

function putAccessToken(token) {
  localStorage.setItem('accessToken', token)
}

function removeAccessToken() {
  localStorage.removeItem('accessToken')
}

function getAccessToken() {
  return localStorage.getItem('accessToken') || ''
}

async function fetchWithAuth({ url, method, data, options = {} }) {
  try {
    return await axios({
      url,
      method,
      data,
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export { putAccessToken, removeAccessToken, getAccessToken, fetchWithAuth }