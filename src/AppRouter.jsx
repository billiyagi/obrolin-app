import { BrowserRouter, Routes, Route } from 'react-router'
import NotFoundPage from './pages/Errors/NotFoundPage'
import HomePage from './pages/HomePage'
import DetailThreadPage from './pages/DetailThreadPage'
import CreateThreadPage from './pages/CreateThreadPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateThreadPage />} />
        <Route path="/detail" element={<DetailThreadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
