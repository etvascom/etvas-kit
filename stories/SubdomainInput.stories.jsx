import React, { useState } from 'react'
import { SubdomainInput, Card, Box } from '../src'

export default {
  title: 'Demo/SubdomainInput',
  component: SubdomainInput
}

const SubdomainInputHelper = props => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(e.target.value)
  return <SubdomainInput value={value} onChange={handleChange} {...props} />
}

export const Default = () => (
  <Box p={4}>
    <SubdomainInputHelper
      label='Default status'
      id='default_id'
      suffix='.etvas.com'
    />

    <SubdomainInputHelper
      label='Warning status'
      id='warning_id'
      suffix='.etvas.com'
      warning
    />

    <SubdomainInputHelper
      label='Error status'
      id='error_id'
      suffix='.etvas.com'
      error
    />

    <SubdomainInputHelper
      label='Error with message'
      id='error_message_id'
      suffix='.etvas.com'
      error='There was an error processing your input'
    />
  </Box>
)
export const Placeholder = () => (
  <SubdomainInputHelper
    id='default_id'
    suffix='.etvas.com'
    label='Your custom subdomain'
    placeholder='my-application'
  />
)

export const Tinted = () => (
  <Card m={4} p={4} variant='tinted'>
    <SubdomainInputHelper
      id='default_id'
      suffix='.helloetvas.com'
      label='Please enter slug'
      placeholder='tinted'
      tinted
    />

    <SubdomainInputHelper
      label='Warning status'
      id='warning_id'
      suffix='.etvas.com'
      warning
      tinted
    />

    <SubdomainInputHelper
      label='Error status'
      id='error_id'
      suffix='.etvas.com'
      error
      tinted
    />

    <SubdomainInputHelper
      label='Error with message'
      id='error_message_id'
      suffix='.etvas.com'
      error='There was an error processing your input'
      tinted
    />
  </Card>
)
