import { Routes, Route } from 'react-router'
import NotFoundPage from './pages/Errors/NotFoundPage'
import HomePage from './pages/HomePage'
import DetailThreadPage from './pages/DetailThreadPage'
import CreateThreadPage from './pages/CreateThreadPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPreloadProcess } from './states/isPreload/action'
import GuestRoute from './routes/GuestRoute'
import ProtectedRoute from './routes/ProtectedRoute'

export default function AppRouter() {

  const authUser = useSelector((state) => state.authUser)
  const isPreload = useSelector((state) => state.isPreload)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])


  if(isPreload) {
    return null
  }

  if(authUser == null) {
    return (
      <Routes>
        <Route element={<GuestRoute authUser={authUser}/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  }


  return (
    <Routes>
      <Route element={<ProtectedRoute authUser={authUser}/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateThreadPage />} />
        <Route path="/detail/:id" element={<DetailThreadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
