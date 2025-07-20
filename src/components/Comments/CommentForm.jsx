import React from 'react'
import Button from '../ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function CommentForm() {
  return (
    <div className='bg-white rounded-lg shadow p-5'>
      <div className='font-semibold text-lg mb-3'>Beri Komentar</div>
      <textarea name="" id="" className='textarea h-30' rows="4" cols="40"></textarea>
      <div className="flex justify-end mt-5">
        <Button><div className='flex items-center gap-3'>Kirim <HiArrowLongRight className='text-2xl' /></div></Button>
      </div>
    </div>
  )
}
