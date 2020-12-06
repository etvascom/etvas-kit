import React from 'react'
import { Input } from '../src'

export default {
  title: 'Demo/Input',
  component: Input
}

export const Default = () => (
  <>
    <Input id='id' />
    <Input id='id' warning={true} />
    <Input id='id' error={true} />
    <Input id='id' valid={true} />
  </>
)

export const Placeholder = () => (
  <>
    <Input id='id' placeholder='This is a placeholder' />
    <Input
      id='id'
      placeholder='This is a placeholder'
      warning='This is a warning'
    />
    <Input
      id='id'
      placeholder='This is a placeholder'
      error='This is an error'
    />
    <Input id='id' placeholder='This is a placeholder' valid={true} />
  </>
)

export const SubLabel = () => (
  <>
    <Input id='id' subLabel='This is a sub label' />
    <Input id='id' subLabel='This is a sub label' warning='This is a warning' />
    <Input id='id' subLabel='This is a sub label' error='This is an error' />
    <Input id='id' subLabel='This is a sub label' valid={true} />
  </>
)

export const Content = () => (
  <>
    <Input id='id' value='This is some input' />
    <Input id='id' value='This is some input' warning='This is a warning' />
    <Input id='id' value='This is some input' error='This is an error' />
    <Input id='id' value='This is some input' valid={true} />
  </>
)

export const Disabled = () => (
  <>
    <Input id='id' disabled={true} />
    <Input id='id2' disabled={true} warning='This is a warning' />
    <Input id='id3' disabled={true} error='This is an error' />
    <Input id='id4' disabled={true} valid={true} />
  </>
)

export const ContentDisabled = () => (
  <>
    <Input id='id' value='This is some input' disabled={true} />
    <Input
      id='id2'
      value='This is some input'
      disabled={true}
      warning='This is a warning'
    />
    <Input
      id='id3'
      value='This is some input'
      disabled={true}
      error='This is an error'
    />
    <Input id='id4' value='This is some input' disabled={true} valid={true} />
  </>
)
