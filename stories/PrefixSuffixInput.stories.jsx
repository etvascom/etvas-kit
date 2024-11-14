import { useState } from 'react'

import { Box, Card, PrefixSuffixInput } from '../src'

export default {
  title: 'Demo/PrefixSuffixInput',
  component: PrefixSuffixInput
}

const PrefixSuffixInputHelper = props => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(e.target.value)
  return <PrefixSuffixInput value={value} onChange={handleChange} {...props} />
}

export const Default = () => (
  <Box p={4}>
    <PrefixSuffixInputHelper
      label='Disabled'
      id='default_id'
      suffix='.etvas.com'
      disabled
    />
    <PrefixSuffixInputHelper
      label='Valid'
      id='default_id'
      suffix='.etvas.com'
      valid
    />
    <PrefixSuffixInputHelper
      label='Valid Number'
      id='default_id'
      prefix=''
      suffix='$'
      type='number'
      suffixSpace={1}
      valid
    />
    <PrefixSuffixInputHelper
      label='Default status'
      id='default_id'
      suffix='.etvas.com'
    />

    <PrefixSuffixInputHelper
      label='Warning status'
      id='warning_id'
      suffix='.etvas.com'
      warning
    />

    <PrefixSuffixInputHelper
      label='Error status'
      id='error_id'
      suffix='.etvas.com'
      error
    />

    <PrefixSuffixInputHelper
      label='Error with message'
      id='error_message_id'
      suffix='.etvas.com'
      error='There was an error processing your input'
    />
  </Box>
)
export const Placeholder = () => (
  <PrefixSuffixInputHelper
    id='default_id'
    suffix='.etvas.com'
    label='Your custom subdomain'
    placeholder='my-application'
  />
)

export const Disabled = () => (
  <PrefixSuffixInputHelper
    id='default_id'
    prefix=''
    suffix='transactions'
    label='Transaction number'
    placeholder='5'
    disabled
    suffixSpace={1}
  />
)

export const Tinted = () => (
  <Card m={4} p={4} variant='tinted'>
    <PrefixSuffixInputHelper
      id='default_id'
      suffix='.helloetvas.com'
      label='Please enter slug'
      placeholder='tinted'
      tinted
    />

    <PrefixSuffixInputHelper
      label='Warning status'
      id='warning_id'
      suffix='.etvas.com'
      warning
      tinted
    />

    <PrefixSuffixInputHelper
      label='Error status'
      id='error_id'
      suffix='.etvas.com'
      error
      tinted
    />

    <PrefixSuffixInputHelper
      label='Error with message'
      id='error_message_id'
      suffix='.etvas.com'
      error='There was an error processing your input'
      tinted
    />
  </Card>
)
