import { getAllLeaderboards } from '../../api/leaderboards'

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
}
 
function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  }
}

function asyncReceiveLeaderboards() {
  return async(dispatch) => {
    try {
      const leaderboards = await getAllLeaderboards()
	  dispatch(receiveLeaderboardsActionCreator(leaderboards.data.data.leaderboards))
    } catch (error) {
      console.log(error)
    }
  }
}

export { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator, ActionType }