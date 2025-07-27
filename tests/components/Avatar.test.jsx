import { render, screen } from '@testing-library/react'
import Avatar from '../../src/components/ui/Avatar'
import { describe, it, expect } from 'vitest'

describe('Avatar component', () => {
  it('should render avatar with name-based URL when image is not provided', () => {
    render(<Avatar name='John Doe' />)
    const img = screen.getByAltText('Avatar of John Doe')
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('ui-avatars.com/api')
    expect(img.src).toContain('John%20Doe')
  })

  it('should render custom image when image prop is provided', () => {
    const customImage = 'https://example.com/avatar.png'
    render(<Avatar name='Jane' image={customImage} />)
    const img = screen.getByAltText('Avatar of Jane')
    expect(img.src).toBe(customImage)
  })
})
