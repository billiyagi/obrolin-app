import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../../src/components/LoginForm'
import { MemoryRouter } from 'react-router'
import { describe, it, expect, vi, afterEach } from 'vitest'

afterEach(cleanup)

describe('LoginForm component', () => {
  it('should render email and password inputs', () => {
    render(
      <MemoryRouter>
        <LoginForm handleLogin={() => {}} />
      </MemoryRouter>
    )
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument()
  })

  it('should call handleLogin with email and password when login form is submitted', async () => {
    const mockLogin = vi.fn()
    render(
      <MemoryRouter>
        <LoginForm handleLogin={mockLogin} />
      </MemoryRouter>
    )

    await userEvent.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/Password/i), '123456')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'john@example.com',
      password: '123456'
    })
  })
})
