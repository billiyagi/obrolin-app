import Button from '../ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'
import { useForm } from 'react-hook-form'

export default function CommentForm ({ onCreateComment, threadId }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      content: ''
    }
  })

  const onSubmit = (data) => {
    onCreateComment(data.content, threadId)
    reset() // reset form setelah submit
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white rounded-lg shadow p-5'>
      <div className='font-semibold text-lg mb-3'>Beri Komentar</div>

      <textarea
        {...register('content', { required: 'Komentar tidak boleh kosong' })}
        className='textarea h-30'
        rows='4'
        cols='40'
      />
      {errors.content && <p className='text-red-500 text-sm'>{errors.content.message}</p>}

      <div className='flex justify-end mt-5'>
        <Button type='submit'>
          <div className='flex items-center gap-3'>
            Kirim <HiArrowLongRight className='text-2xl' />
          </div>
        </Button>
      </div>
    </form>
  )
}
