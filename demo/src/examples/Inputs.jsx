import React from 'react'
import { Flex } from '@ivoryio/kogaio'
import { Input } from '../../../src'

const InputExamples = props => (
  <Flex flexDirection='column' minWidth={240} {...props}>
    <Input
      id='input-default'
      label='Default'
      onChange={() => {}}
      placeholder='Default Input'
    />
    <Input
      disabled
      id='disabled-input'
      label='Disabled'
      onChange={() => {}}
      placeholder='Disabled Input'
    />
    <Input
      error
      id='invalid-input'
      label='Invalid'
      onChange={() => {}}
      placeholder='Input with error'
    />
  </Flex>
)

InputExamples.propTypes = {}

export default InputExamples
