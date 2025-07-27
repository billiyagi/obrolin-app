/**
 * Skenario Pengujian:
 * 1. Komponen Input harus dirender dengan label dan nilai yang diberikan.
 * 2. Komponen Input harus memanggil onChange ketika pengguna mengetik.
 */
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Input from '../../src/components/ui/Input'

afterEach(cleanup)

describe('Input component', () => {
  it('should render with label and value', () => {
    render(<Input label='Username' id='username' value='John' onChange={() => {}} />)
    expect(screen.getByLabelText(/Username/i)).toHaveValue('John')
  })

  it('should call onChange when typing', () => {
    const handleChange = vi.fn()
    render(<Input label='Username' id='username' value='' onChange={handleChange} />)

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'Jane' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
