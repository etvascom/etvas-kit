import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Typography } from '../Typography'

import styles from './radio.styles'

const RadioButton = ({
  name,
  id,
  label,
  value,
  checked,
  disabled,
  onChange,
  variant
}) => (
  <LabelWrapper disabled={disabled} variant={variant}>
    <Input
      id={id}
      variant={variant}
      type='radio'
      name={name}
      value={value}
      selected={checked}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {variant === 'normal' && (
      <RoundedBox disabled={disabled}>{checked && <span></span>}</RoundedBox>
    )}
    {label && <Typography variant='labelSmall'>{label}</Typography>}
  </LabelWrapper>
)

const Input = styled.input`
  ${({ variant }) => variant === 'checkmark' && styles.checkmarkInput}
`

const LabelWrapper = styled.label`
  ${styles.radioLabel};
`
const RoundedBox = styled.div`
  ${styles.roundedBox};
`

RadioButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  variant: PropTypes.string
}

RadioButton.displayName = 'RadioButton'

RadioButton.defaultProps = {
  variant: 'normal'
}

export default RadioButton
