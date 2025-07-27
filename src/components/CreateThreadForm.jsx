import Button from './ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'
import Input from './ui/Input'
import { useForm } from 'react-hook-form'

export default function CreateThreadForm ({ onCreateThread }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      category: '',
      body: ''
    }
  })

  const onSubmit = (data) => {
    onCreateThread(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white rounded-lg shadow p-5'
    >
      <div className='font-semibold text-xl mb-3'>Buat Obrolan Baru</div>

      <Input
        className='mb-3'
        label='Apa yang mau kamu diskusikan?'
        type='text'
        id='title'
        {...register('title', { required: 'Judul wajib diisi' })}
      />
      {errors.title && <p className='text-red-500 text-sm' data-testid='title-thread'>{errors.title.message}</p>}

      <Input
        className='mb-3'
        label='Kategori'
        type='text'
        id='category'
        {...register('category', { required: 'Kategori wajib diisi' })}
      />
      {errors.category && <p className='text-red-500 text-sm' data-testid='category-thread'>{errors.category.message}</p>}

      <div>
        <label htmlFor='body' className='text-sm font-medium text-gray-700 mb-2 inline-block'>
          Obrolan Kamu
        </label>
        <textarea
          id='body'
          className='textarea h-30'
          rows='4'
          cols='40'
          {...register('body', { required: 'Isi obrolan wajib diisi' })}
        />
        {errors.body && <p className='text-red-500 text-sm' data-testid='body-thread'>{errors.body.message}</p>}
      </div>

      <div className='flex justify-end mt-5'>
        <Button type='submit'>
          <div className='flex items-center gap-3'>
            Buat Obrolan <HiArrowLongRight className='text-2xl' />
          </div>
        </Button>
      </div>
    </form>
  )
}
