import { setAuthUserActionCreator } from '../authUser/action'
import { getOwnProfile } from '../../api/user'
import { showLoading, hideLoading } from '@dimasmds/react-redux-loading-bar'

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
}
 
function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  }
}

function asyncPreloadProcess() {
  return async(dispatch) => {
    dispatch(showLoading())
    try {
      // preload process
      const authUser = await getOwnProfile()
      dispatch(setAuthUserActionCreator(authUser.data.data.user))
    } catch (error) {
      console.log(error)
      // fallback process
      dispatch(setAuthUserActionCreator(null))
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false))
      dispatch(hideLoading())
    }
  }
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess }