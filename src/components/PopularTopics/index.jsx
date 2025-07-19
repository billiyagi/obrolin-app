import TopicItem from './TopicItem'

export default function PopularTopics() {
  return (
    <div className='bg-white shadow p-5 rounded-lg'>
	  <p className='font-semibold text-xl mb-3'>Popular Topics</p>
	  <div className="flex gap-3 flex-wrap">
        <TopicItem name={'jakarta'}/>
        <TopicItem name={'bandung'}/>
        <TopicItem name={'perkenalan kemaren'}/>
        <TopicItem name={'redux'}/>
        <TopicItem name={'react'}/>
	  </div>
    </div>
  )
}
