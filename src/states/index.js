import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import userReducer from './user/reducer'
import threadsReducer from './threads/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    user: userReducer,
    threads: threadsReducer,
  }
})

export default store