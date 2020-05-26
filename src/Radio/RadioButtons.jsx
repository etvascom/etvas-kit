import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@ivoryio/kogaio'
import RadioButton from './RadioButton'

const RadioButtons = ({ name, value, options, onChange, noWrap, ...props }) => {
  const _handleOptionChange = option => {
    onChange(option.value)
  }

  return (
    <Flex flexDirection={noWrap ? 'column' : 'row'} {...props}>
      {options.map(opt => (
        <RadioButton
          key={opt.value}
          value={opt.value}
          checked={opt.value === value}
          label={opt.label}
          disabled={opt.disabled}
          onChange={() => _handleOptionChange(opt)}
        />
      ))}
    </Flex>
  )
}

RadioButtons.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
  noWrap: PropTypes.bool
}

RadioButtons.defaultProps = {
  noWrap: false
}

RadioButtons.displayName = 'RadioButtons'

export default RadioButtons
