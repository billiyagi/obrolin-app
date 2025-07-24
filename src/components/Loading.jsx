import LoadingBar from '@dimasmds/react-redux-loading-bar'
export default function Loading() {
  return (
    <div className="loading">
      <LoadingBar progressIncrease={1} showFastActions updateTime={100} />
    </div>
  )
}
