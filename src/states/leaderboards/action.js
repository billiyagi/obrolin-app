import { getAllLeaderboards } from '../../api/leaderboards'
import { showLoading, hideLoading } from '@dimasmds/react-redux-loading-bar'

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS'
}

function receiveLeaderboardsActionCreator (leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards
    }
  }
}

function asyncReceiveLeaderboards () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const leaderboards = await getAllLeaderboards()
      dispatch(receiveLeaderboardsActionCreator(leaderboards.data.data.leaderboards))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator, ActionType }
