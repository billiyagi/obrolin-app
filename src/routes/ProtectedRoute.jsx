import { useNavigate, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'

export default function ProtectedRoute({ authUser }) {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const notAllowedRoute = [
      '/login',
      '/register'
    ]
    if(authUser == null) {
      navigate('/login')
    } else if (notAllowedRoute.includes(location.pathname) && authUser != null) {
      navigate('/')
    } 
  },[authUser, navigate, location.pathname])

  return (
    <Outlet/>
  )
}
