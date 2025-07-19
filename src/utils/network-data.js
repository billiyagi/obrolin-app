import axios from 'axios'

function putAccessToken() {
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
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export { putAccessToken, removeAccessToken, getAccessToken, fetchWithAuth }