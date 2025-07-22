import { register } from '../../api/auth'

const ActionType = {
  REGISTER_USER: 'REGISTER_USER',
  RECEIVE_USER: 'RECEIVE_USER'
}

function receiveUserActionCreator(user) {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      user,
    },
  }
}

function setUserRegister(user) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  }
}

function asyncRegisterUser({ name, email, password }) {
  return async(dispatch) => {
    try {
      const user = await register({ name, email, password })
      dispatch(setUserRegister(user))
      return {
        status: true,
        message: 'Register Success'
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export { setUserRegister, asyncRegisterUser, ActionType, receiveUserActionCreator }
