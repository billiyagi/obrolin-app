import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

export default function Layout({ children }) {
  return (
    <>
      <Loading/>
      <Header/>
      <main className='container-app'>
        {children}
      </main>
      <Footer/>
    </>
  )
}
