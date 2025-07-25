import LeaderboardItem from './LeaderboardItem'
import LeaderboardLoading from '../Skeleton/LeaderboardLoading'
export default function Leaderboards ({ leaderboards }) {
  return (
    <div className='bg-white shadow p-5 rounded-lg'>
      <p className='font-semibold text-xl mb-3'>Leaderboard</p>
      {leaderboards && leaderboards.length !== 0 ? leaderboards.map((leaderboard, index) => <LeaderboardItem key={leaderboard.user.id} user={leaderboard.user} total={leaderboard.score} order={index} />) : <LeaderboardLoading />}
    </div>
  )
}
