import React, { useState, useEffect, useCallback } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const Checkbox = ({
  label,
  color,
  checked,
  name,
  id,
  onChange,
  size,
  variant,
  ...props
}) => {
  const [isChecked, setChecked] = useState(!!checked)

  useEffect(() => {
    setChecked(!!checked)
  }, [checked])

  const handleChange = useCallback(
    event => {
      const { checked: nativeChecked } = event.target
      setChecked(nativeChecked)
      onChange && onChange(event)
    },
    [setChecked, onChange]
  )

  return (
    <StyledLabel htmlFor={id} {...props}>
      <StyledIcon
        color={isChecked ? color : 'uncheckedCheckbox'}
        size={size}
        name={isChecked ? 'checkboxMarked' : 'checkboxBlankOutline'}
      />
      <input
        type='checkbox'
        id={id}
        name={name}
        checked={isChecked}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {label && (
        <Typography variant={variant} ml={2} pt='0.2em'>
          {label}
        </Typography>
      )}
    </StyledLabel>
  )
}

const StyledLabel = styled.label(
  css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '40px',
    userSelect: 'none'
  })
)

const StyledIcon = styled(Icon)(
  css({
    minWidth: '24px'
  })
)

Checkbox.propTypes = {
  label: PropTypes.node,
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string
}

Checkbox.defaultProps = {
  color: 'brand',
  size: 'medium',
  variant: 'labelSmall'
}
