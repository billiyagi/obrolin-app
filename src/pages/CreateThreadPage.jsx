import Layout from '../Layout'
import Aside from '../components/Aside'
import CreateThreadForm from '../components/CreateThreadForm'

export default function CreateThreadPage() {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-3 relative min-h-screen'>
        <div className="col-span-1 sticky top-0 h-fit pt-5">
          <Aside isBack/>
        </div>
        <div className='col-span-11 pt-5'>
          <CreateThreadForm/>
        </div>
      </div>
    </Layout>
  )
}
