import Button from './ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'
import Input from './ui/Input'
import useInput from '../hooks/useInput'

export default function CreateThreadForm({ onCreateThread }) {
  const [ title, setTitle ] = useInput('')
  const [ category, setCategory ] = useInput('')
  const [ body, setBody ] = useInput('')
  return (
    <div className='bg-white rounded-lg shadow p-5'>
      <div className='font-semibold text-xl mb-3'>Buat Obrolan Baru</div>
      <Input className="mb-3" label="Apa yang mau kamu diskusikan?" type="text" id="title" value={title} onChange={setTitle}/>
      <Input className="mb-3" label="Kategori" type="text" id="category" value={category} onChange={setCategory}/>
      <div>
        <label htmlFor="obrolan" className='text-sm font-medium text-gray-700 mb-2 inline-block'>Obrolan Kamu</label>
        <textarea name="obrolan" id="obrolan" className='textarea h-30' rows="4" cols="40" value={body} onChange={setBody}></textarea>
      </div>
      <div className="flex justify-end mt-5">
        <Button onClick={() => onCreateThread({ title, category, body })}><div className='flex items-center gap-3'>Buat Obrolan <HiArrowLongRight className='text-2xl' /></div></Button>
      </div>
    </div>
  )
}
