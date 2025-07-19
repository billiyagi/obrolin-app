const BASE_URL = 'https://forum-api.dicoding.dev/v1'

const ENDPOINTS = {
  auth: {
    register: () => `${BASE_URL}/register`,
    login: () => `${BASE_URL}/login`,
    profile: () => `${BASE_URL}/users/me`
  },
  users: {
    all: () => `${BASE_URL}/users`,
    byId: id => `${BASE_URL}/users/${id}`
  },
  threads: {
    all: () => `${BASE_URL}/threads`,
    byId: id => `${BASE_URL}/threads/${id}`,
    create: () => `${BASE_URL}/threads`
  },
  comments: {
    create: threadId => `${BASE_URL}/threads/${threadId}/comments`
  },
  votes: {
    up: threadId => `${BASE_URL}/threads/${threadId}/up-vote`,
    down: threadId => `${BASE_URL}/threads/${threadId}/down-vote`,
    neutral: threadId => `${BASE_URL}/threads/${threadId}/neutral-vote`,
    comment: {
      up: (threadId, commentId) =>
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      down: (threadId, commentId) =>
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      neutral: (threadId, commentId) =>
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`
    }
  },
  leaderboards: {
    all: () => `${BASE_URL}/leaderboards`
  }
}

export default ENDPOINTS
