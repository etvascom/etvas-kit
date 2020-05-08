import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Dropdown } from '../../../src'

const placeholderData = [
  { id: 1, label: 'Collaboratively optimize cutting-edge' },
  { id: 2, label: 'Dynamically morph ethical' },
  { id: 3, label: 'Assertively utilize web-enabled' },
  { id: 4, label: 'Compellingly deliver standardized' },
  { id: 5, label: 'Energistically embrace turnkey' },
  { id: 6, label: 'Collaboratively foster world-class' }
]

const DropdownExamples = ({ disabled, error, ...props }) => {
  const [value, storeValue] = useState('')
  return (
    <Flex flexDirection='column' {...props}>
      <Dropdown
        disabled={disabled}
        error={error}
        id='dropdown-default'
        label='Default'
        onChange={newValue => storeValue(newValue)}
        value={value}
        variant='default'
        width={1}>
        {placeholderData.map(item => (
          <Dropdown.Option key={item.id} value={item.label}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      <Dropdown
        disabled
        label='Disabled'
        onChange={() => {}}
        variant='disabled'
        width={1}
      />
      <Dropdown
        error
        label='Invalid'
        onChange={() => {}}
        variant='error'
        width={1}>
        {placeholderData.map(item => (
          <Dropdown.Option key={item.id} value={item.label}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
    </Flex>
  )
}

DropdownExamples.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export default DropdownExamples
