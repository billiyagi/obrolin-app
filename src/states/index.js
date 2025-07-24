import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import userReducer from './user/reducer'
import threadsReducer from './threads/reducer'
import createThreadReducer from './threads/createThreadReducer'
import topicsReducer from './threads/topicsReducer'
import leaderboardsReducer from './leaderboards/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    user: userReducer,
    threads: threadsReducer,
    createThread: createThreadReducer,
    topics: topicsReducer,
    leaderboards: leaderboardsReducer
  }
})

export default store