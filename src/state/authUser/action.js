import { login } from '../../api/auth'
import { getOwnProfile } from '../../api/user'
import { putAccessToken } from '../../utils/network-data'

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
}

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  }
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  }
}

function asyncSetAuthUser({ id, password }) {
  return async(dispatch) => {
    try {
      const token = await login({ id, password })
      putAccessToken(token)
      const authUser = await getOwnProfile()

      dispatch(setAuthUserActionCreator(authUser))
    } catch (error) {
      alert(error.message)
    }
  }
}
function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator())
    putAccessToken('')
  }
}

export { ActionType,setAuthUserActionCreator, unsetAuthUserActionCreator, asyncSetAuthUser, asyncUnsetAuthUser }