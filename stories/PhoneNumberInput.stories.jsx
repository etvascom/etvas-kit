import { PhoneNumberInput } from '../src/PhoneNumberInput'
import React, { useState } from 'react'

export default {
  title: 'Demo/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [
    Story => (
      <div style={{ padding: '15rem' }}>
        <Story/>
      </div>
    )
  ]
}

export const DropDown = () => {
  const [value, setValue] = useState('+37312345678')
  const onChange = e => setValue(e.target.value)

  return (
    <>
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        label='Phone Number Down'
        valid
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        label='Phone Number Down'
        warning
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        label='Phone Number Down'
        error
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        label='Phone Number Down'
        disabled
      />
    </>
  )
}

export const DropUp = () => {
  const [value, setValue] = useState('+37312345678')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <>
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        valid
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        warning
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        error
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        disabled
      />
    </>
  )
}
