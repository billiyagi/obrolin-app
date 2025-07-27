import Input from './Input'

const meta = {
  component: Input
}

export default meta

export const Default = {
  args: {
    type: 'text',
    value: '',
    onChange: () => {}
  }
}

export const Labeled = {
  args: {
    type: 'text',
    value: 'this is input',
    isLabel: true,
    label: 'With Label'
  }
}

export const Password = {
  args: {
    type: 'password',
    value: 'thisis password'
  }
}

export const Number = {
  args: {
    type: 'number',
    value: '5'
  }
}
