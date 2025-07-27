import Avatar from './Avatar'

const meta = {
  component: Avatar
}

export default meta

export const Default = {
  args: {
    name: 'name',
    color: 'fff',
    background: '#000000'
  }
}

export const CustomColorAndBackground = {
  args: {
    name: 'name',
    color: 'ffffff',
    background: '19d6ff'
  }
}

export const WithImage = {
  args: {
    name: 'name',
    color: 'ffffff',
    background: '19d6ff',
    image: 'https://avatars.githubusercontent.com/u/89958256?v=4',
    className: 'w-20'
  }
}
