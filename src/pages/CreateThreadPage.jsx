import Layout from '../Layout'
import Aside from '../components/Aside'
import CreateThreadForm from '../components/CreateThreadForm'
import { useDispatch } from 'react-redux'
import { asyncAddThreads } from '../states/threads/action'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

export default function CreateThreadPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onCreateThread = async ({ title, category, body }) => {
    const thread = await dispatch(asyncAddThreads({ title, category, body }))

    if (thread.status) {
      Swal.fire({
        title: 'Success',
        text: 'Thread Successfully Created',
        icon: 'success'
      })
      navigate('/login')
    } else {
      Swal.fire({
        title: 'Failed',
        text: thread.message,
        icon: 'error'
      })
    }
  }

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className='col-span-1 sticky top-0 h-fit pt-5'>
          <Aside isBack />
        </div>
        <div className='col-span-11 pt-5'>
          <CreateThreadForm onCreateThread={onCreateThread} />
        </div>
      </div>
    </Layout>
  )
}
