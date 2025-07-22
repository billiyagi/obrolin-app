import { useNavigate, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'

export default function GuestRoute({ authUser }) {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(authUser != null) {
      navigate('/')
    } else if (location.pathname == '/' && authUser == null) {
      navigate('/login')
    }
  },[authUser, navigate, location.pathname])

  return (
    <Outlet/>
  )
}
