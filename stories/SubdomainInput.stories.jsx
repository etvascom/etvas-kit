import React, { useState } from 'react'
import { SubdomainInput } from '../src/SubdomainInput/SubdomainInput'

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
  <SubdomainInputHelper
    label='Please enter subdomain'
    id='default_id'
    suffix='.etvas.com'
  />
)
export const Placeholder = () => (
  <SubdomainInputHelper
    id='default_id'
    suffix='.etvas.com'
    label='Your custom subdomain'
    placeholder='my-application'
  />
)
