import { login } from '../../api/auth'
import { getOwnProfile } from '../../api/user'
import { putAccessToken } from '../../utils/network-data'
import Swal from 'sweetalert2'

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

function asyncSetAuthUser({ email, password }) {
  return async(dispatch) => {
    try {
      const response = await login({ email, password })
      putAccessToken(response.data.data.token)
      const authUser = await getOwnProfile()

      dispatch(setAuthUserActionCreator(authUser.data.data.user))
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.message
      })
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