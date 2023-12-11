import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex } from '../Flex'
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
  disabled,
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
      <Flex width={size}>
        <Icon
          color={isChecked && !disabled ? color : 'uncheckedCheckbox'}
          size={size}
          name={isChecked ? 'checkboxMarked' : 'checkboxBlankOutline'}
        />
      </Flex>
      <input
        type='checkbox'
        id={id}
        name={name}
        checked={isChecked}
        disabled={disabled}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {label && (
        <Typography
          variant={variant}
          color={disabled ? 'baseGray' : 'text'}
          ml={2}
        >
          {label}
        </Typography>
      )}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: flex-start;
`

Checkbox.propTypes = {
  label: PropTypes.node,
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool
}

Checkbox.defaultProps = {
  color: 'brand',
  size: 'medium',
  variant: 'base14Light',
  disabled: false
}
