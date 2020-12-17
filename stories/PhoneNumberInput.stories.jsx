import { PhoneNumberInput } from '../src/PhoneNumberInput'
import React, { useState } from 'react'

export default {
  title: 'Demo/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [
    Story => (
      <div style={{ padding: '15rem' }}>
        <Story />
      </div>
    )
  ]
}

export const DropDown = () => {
  const [value, setValue] = useState('+40752459554')
  const onChange = e => {
    console.info('value is', e.target.value)
    setValue(e.target.value)
  }
  return (
    <PhoneNumberInput
      id='default_id'
      value={value}
      onChange={onChange}
      label='Phone Number'
    />
  )
}
export const DropUp = () => (
  <PhoneNumberInput id='default_id' dropUp label='Phone Number' />
)
