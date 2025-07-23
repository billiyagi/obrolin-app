import Button from '../ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'
import useInput from '../../hooks/useInput'

export default function CommentForm({ onCreateComment, threadId }) {
  const [content, handleChange, setContent ] = useInput('')
  const onSubmit = () => {
    setContent('')
    onCreateComment(content, threadId)
  }
  return (
    <div className='bg-white rounded-lg shadow p-5'>
      <div className='font-semibold text-lg mb-3'>Beri Komentar</div>
      <textarea value={content} onChange={handleChange} className='textarea h-30' rows="4" cols="40"></textarea>
      <div className="flex justify-end mt-5">
        <Button onClick={onSubmit}><div className='flex items-center gap-3'>Kirim <HiArrowLongRight className='text-2xl' /></div></Button>
      </div>
    </div>
  )
}
