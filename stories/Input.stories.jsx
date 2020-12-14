import React from 'react'
import { Input, Typography } from '../src'

export default {
  title: 'Demo/Input',
  component: Input
}

export const Default = () => (
  <>
    <Input label='Input default' id='id' />
    <Input label='Input in warning state' id='id' warning />
    <Input label='Input in error state' id='id' error />
    <Input label='Input in valid state' id='id' valid />
  </>
)

export const Placeholder = () => (
  <>
    <Input
      label='Input default with placeholder'
      id='id'
      placeholder='This is a placeholder'
    />
    <Input
      label='Input in warning state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      warning='This is a warning'
    />
    <Input
      label='Input in error state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      error='This is an error'
    />
    <Input
      label='Input in valid state with placeholder'
      id='id'
      placeholder='This is a placeholder'
      valid
    />
  </>
)

export const SubLabel = () => (
  <>
    <Input
      label='Input default with sub label'
      id='id'
      subLabel='This is a sub label'
    />
    <Input
      label='Input in warning state with sub label'
      id='id'
      subLabel='This is a sub label'
      warning='This is a warning'
    />
    <Input
      label='Input in error state with sub label'
      id='id'
      subLabel='This is a sub label'
      error='This is an error'
    />
    <Input
      label='Input in valid state with sub label'
      id='id'
      subLabel='This is a sub label'
      valid
    />
  </>
)

export const Content = () => (
  <>
    <Input
      label='Input default with value'
      id='id'
      value='This is some input'
    />
    <Input
      label='Input in warning state with value'
      id='id'
      value='This is some input'
      warning='This is a warning'
    />
    <Input
      label='Input in error state with value'
      id='id'
      value='This is some input'
      error='This is an error'
    />
    <Input
      label='Input in valid state with value'
      id='id'
      value='This is some input'
      valid
    />
  </>
)

export const Disabled = () => (
  <>
    <Input label='Input default with disabled attribute' id='id' disabled />
    <Input
      label='Input in warning state with disabled attribute'
      id='id2'
      disabled
      warning='This is a warning'
    />
    <Input
      label='Input in error state with disabled attribute'
      id='id3'
      disabled
      error='This is an error'
    />
    <Input
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
    <Input label='Input default with loading' id='id' loading />
    <Input
      label='Input default with loading and value'
      id='id'
      loading
      value='This  is some input'
    />
    <Input
      label='Input default with loading and placeholder'
      id='id'
      loading
      placeholder='This is a placeholder'
    />
    <Input
      label='Input default with loading and sub label'
      id='id'
      loading
      subLabel='This is a sub label'
    />
    <Input label='Input in error state with loading' id='id' loading error />
  </>
)

export const Types = () => (
  <>
    <Input label='Input type button' id='id' type='button' />
    <Input label='Input type checkbox' id='id' type='checkbox' />
    <Input label='Input type color' id='id' type='color' />
    <Input label='Input type date' id='id' type='date' />
    <Input label='Input type datetime-local' id='id' type='datetime-local' />
    <Input label='Input type email' id='id' type='email' />
    <Input label='Input type hidden' id='id' type='hidden' />
    <Input label='Input type image' id='id' type='image' />
    <Input label='Input type month' id='id' type='month' />
    <Input label='Input type number' id='id' type='number' />
    <Input label='Input type password' id='id' type='password' />
    <Input label='Input type radio' id='id' type='radio' />
    <Input label='Input type range' id='id' type='range' />
    <Input label='Input type reset' id='id' type='reset' />
    <Input label='Input type search' id='id' type='search' />
    <Input label='Input type submit' id='id' type='submit' />
    <Input label='Input type tel' id='id' type='tel' />
    <Input label='Input type text' id='id' type='text' />
    <Input label='Input type time' id='id' type='time' />
    <Input label='Input type url' id='id' type='url' />
    <Input label='Input type week' id='id' type='week' />
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
