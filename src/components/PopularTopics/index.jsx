import TopicItem from './TopicItem'
import PopularTopicsLoading from '../Skeleton/PopularTopicsLoading'

export default function PopularTopics ({ topics, onSelectTopic }) {
  return (
    <div className='bg-white shadow p-5 rounded-lg'>
      <p className='font-semibold text-xl mb-3'>Popular Topics</p>
      <div className='flex gap-3 flex-wrap'>
        {topics && topics.length !== 0 ? topics.map((topic, index) => <TopicItem key={index} name={topic.name} onSelectTopic={onSelectTopic} isSelected={topic.isSelected} />) : <PopularTopicsLoading />}
      </div>
    </div>
  )
}
