import Button from './Button'

const meta = {
  component: Button
}

export default meta

export const Default = {
  args: {
    children: 'Click Me'
  }
}

export const Loading = {
  args: {
    children: 'Loading',
    isLoading: true
  }
}

export const Rounded = {
  args: {
    children: 'Rounded Button',
    rounded: 'full'
  }
}
