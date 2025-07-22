import { setAuthUserActionCreator } from '../authUser/action'
import { getOwnProfile } from '../../api/user'

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
    }
  }
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess }