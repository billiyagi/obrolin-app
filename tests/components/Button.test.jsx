/**
 * Skenario Pengujian Button Component:
 * 1. Menampilkan teks children dengan benar.
 * 2. Memanggil fungsi onClick ketika button diklik.
 * 3. Menampilkan loader dan menonaktifkan button ketika isLoading bernilai true.
 */
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Button from '../../src/components/ui/Button'
import { describe, it, expect, vi, afterEach } from 'vitest'

afterEach(cleanup)

describe('Button component', () => {
  it('should render with children text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click Me')
  })

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('should show loader when isLoading is true', () => {
    render(<Button isLoading>Loading...</Button>)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
