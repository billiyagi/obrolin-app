import clsx from 'clsx'
export default function TopicItem({ name, onSelectTopic, isSelected }) {
  return (
    <button className={clsx('bg-gray-100 shadow rounded-lg p-2 hover:bg-gray-300 cursor-pointer', isSelected && 'bg-gray-800 text-white hover:bg-gray-600')} onClick={() => onSelectTopic(name, isSelected)}>
	  {name}
    </button>
  )
}
