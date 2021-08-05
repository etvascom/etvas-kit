import { PhoneNumberInput } from '../src/PhoneNumberInput'
import React, { useState } from 'react'
import { Card } from '../src'

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
        dropUp
        valid
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        dropUp
        warning
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        dropUp
        error
      />
      <PhoneNumberInput
        id='dropup_id'
        value={value}
        onChange={onChange}
        label='Phone Number Up'
        dropUp
        disabled
      />
    </>
  )
}

export const TintedPhoneNumberInput = () => {
  const [value, setValue] = useState('+37312345678')
  const onChange = e => setValue(e.target.value)

  return (
    <Card width='400px' height='504px' variant={'tinted'}>
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        tinted={true}
        label='Phone Number Down'
        valid
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        tinted={true}
        label='Phone Number Down'
        warning
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        tinted={true}
        label='Phone Number Down'
        error
      />
      <PhoneNumberInput
        id='dropdown_id'
        value={value}
        onChange={onChange}
        tinted={true}
        label='Phone Number Down'
        disabled
      />
    </Card>
  )
}
