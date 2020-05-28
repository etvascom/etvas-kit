import React, { useState, useEffect, useCallback } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '@ivoryio/kogaio'
import { Icon } from '../Icon'

export const Checkbox = ({
  label,
  color,
  checked,
  value,
  name,
  id,
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = useCallback(
    ev => {
      setIsChecked(ev.target.checked)
      const newValue = ev.target.checked ? value : ''
      onChange && onChange(newValue)
    },
    [setIsChecked, onChange, value]
  )

  useEffect(() => setIsChecked(checked), [checked, setIsChecked])

  return (
    <StyledLabel htmlFor={id}>
      <Icon
        color={color}
        size='20px'
        name={isChecked ? 'checkboxChecked' : 'checkboxUnchecked'}
      />
      <input
        type='checkbox'
        id={id}
        value={value}
        name={name}
        checked={isChecked}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {label && <Box ml={3}>{label}</Box>}
    </StyledLabel>
  )
}

const StyledLabel = styled.label(
  css({
    display: 'flex',
    alignItems: 'center'
  })
)

Checkbox.propTypes = {
  label: PropTypes.node,
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.any
}

Checkbox.defaultProps = {
  color: 'accent',
  value: 'on'
}
