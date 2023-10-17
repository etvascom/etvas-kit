import React, { useState } from 'react'

import { Input } from '../src'

export default {
  title: 'Demo/Input',
  component: Input
}

const StorybookInput = props => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(e.target.value)

  return <Input value={value} onChange={handleChange} {...props} />
}

export const Default = () => (
  <>
    <StorybookInput label='Input default' id='id' />
    <StorybookInput label='Input in warning state' id='id' warning />
    <StorybookInput label='Input in error state' id='id' error />
    <StorybookInput label='Input in valid state' id='id' valid />
  </>
)

export const Placeholder = () => (
  <>
    <StorybookInput
      label='Input default with placeholder'
      id='id'
      placeholder='This is a placeholder'
    />
    <StorybookInput
      label='Input in warning state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      warning='This is a warning'
    />
    <StorybookInput
      label='Input in error state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      error='This is an error'
    />
    <StorybookInput
      label='Input in valid state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      valid
    />
  </>
)

export const SubLabel = () => (
  <>
    <StorybookInput
      label='Input default with sub label'
      id='id'
      subLabel='This is a sub label'
    />
    <StorybookInput
      label='Input in warning state with sub label'
      id='id'
      subLabel='This is a sub label'
      warning='This is a warning'
    />
    <StorybookInput
      label='Input in error state with sub label'
      id='id'
      subLabel='This is a sub label'
      error='This is an error'
    />
    <StorybookInput
      label='Input in valid state with sub label'
      id='id'
      subLabel='This is a sub label'
      valid
    />
  </>
)

export const Disabled = () => (
  <>
    <StorybookInput
      label='Input default with disabled attribute'
      id='id'
      disabled
    />
    <StorybookInput
      label='Input in warning state with disabled attribute'
      id='id2'
      disabled
      warning='This is a warning'
    />
    <StorybookInput
      label='Input in error state with disabled attribute'
      id='id3'
      disabled
      error='This is an error'
    />
    <StorybookInput
      label='Input in valid state with disabled attribute'
      id='id4'
      disabled
      valid
    />
  </>
)

export const ContentDisabled = () => (
  <>
    <Input
      label='Input default with disabled attribute and value'
      id='id'
      value='This is some input'
      disabled
    />
    <Input
      label='Input in warning state with disabled attribute and value'
      id='id2'
      value='This is some input'
      disabled
      warning='This is a warning'
    />
    <Input
      label='Input in error state with disabled attribute and value'
      id='id3'
      value='This is some input'
      disabled
      error='This is an error'
    />
    <Input
      label='Input in valid state with disabled attribute and value'
      id='id4'
      value='This is some input'
      disabled
      valid
    />
  </>
)

export const Loading = () => (
  <>
    <StorybookInput label='Input default with loading' id='id' loading />
    <StorybookInput
      label='Input default with loading and value'
      id='id'
      loading
      value='This  is some input'
    />
    <StorybookInput
      label='Input default with loading and placeholder'
      id='id'
      loading
      placeholder='This is a placeholder'
    />
    <StorybookInput
      label='Input default with loading and sub label'
      id='id'
      loading
      subLabel='This is a sub label'
    />
    <StorybookInput
      label='Input in error state with loading'
      id='id'
      loading
      error
    />
  </>
)

export const Types = () => (
  <>
    <StorybookInput label='Input type button' id='id' type='button' />
    <StorybookInput label='Input type checkbox' id='id' type='checkbox' />
    <StorybookInput label='Input type color' id='id' type='color' />
    <StorybookInput label='Input type date' id='id' type='date' />
    <StorybookInput
      label='Input type datetime-local'
      id='id'
      type='datetime-local'
    />
    <StorybookInput label='Input type email' id='id' type='email' />
    <StorybookInput label='Input type hidden' id='id' type='hidden' />
    <StorybookInput label='Input type image' id='id' type='image' />
    <StorybookInput label='Input type month' id='id' type='month' />
    <StorybookInput label='Input type number' id='id' type='number' />
    <StorybookInput label='Input type password' id='id' type='password' />
    <StorybookInput label='Input type radio' id='id' type='radio' />
    <StorybookInput label='Input type range' id='id' type='range' />
    <StorybookInput label='Input type reset' id='id' type='reset' />
    <StorybookInput label='Input type search' id='id' type='search' />
    <StorybookInput label='Input type submit' id='id' type='submit' />
    <StorybookInput label='Input type tel' id='id' type='tel' />
    <StorybookInput label='Input type text' id='id' type='text' />
    <StorybookInput label='Input type time' id='id' type='time' />
    <StorybookInput label='Input type url' id='id' type='url' />
    <StorybookInput label='Input type week' id='id' type='week' />
    <StorybookInput label='Input type search' id='id' type='search' />
  </>
)

export const PasswordInput = () => (
  <>
    <Input label='Password input with no value' id='id' type='password' />
    <Input
      label='Password input with value'
      id='id'
      type='password'
      value='Password'
    />
    <Input
      label='Password input with loading state'
      id='id'
      type='password'
      value='Password'
      loading={true}
    />
    <Input
      label='Password input with error state'
      id='id'
      type='password'
      error='There is a problem with your password'
      value='Password'
    />
  </>
)

export const OptionalInput = () => (
  <>
    <StorybookInput label='Optional input' optionalText='Optional' id='id' />
    <StorybookInput label='Required input' id='id' required />
  </>
)
