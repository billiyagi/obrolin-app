import Button from './ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'
import Input from './ui/Input'

export default function CreateThreadForm() {
  return (
    <div className='bg-white rounded-lg shadow p-5'>
      <div className='font-semibold text-xl mb-3'>Buat Obrolan Baru</div>
	  <Input className="mb-3" label="Apa yang mau kamu diskusikan?" type="text" id="title" />
	  <Input className="mb-3" label="Kategori" type="text" id="category"/>
      <div>
        <label htmlFor="obrolan" className='text-sm font-medium text-gray-700 mb-2 inline-block'>Obrolan Kamu</label>
        <textarea name="obrolan" id="obrolan" className='textarea h-30' rows="4" cols="40"></textarea>
	  </div>
      <div className="flex justify-end mt-5">
        <Button><div className='flex items-center gap-3'>Buat Obrolan <HiArrowLongRight className='text-2xl' /></div></Button>
      </div>
    </div>
  )
}
