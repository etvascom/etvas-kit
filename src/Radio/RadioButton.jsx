import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Typography } from '../Typography'

import styles from './radio.styles'

const RadioButton = ({ name, label, value, checked, disabled, onChange }) => (
  <LabelWrapper disabled={disabled}>
    <input
      type='radio'
      name={name}
      value={value}
      selected={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <RoundedBox disabled={disabled}>{checked && <span></span>}</RoundedBox>
    {label && <Typography variant='inputLabel'>{label}</Typography>}
  </LabelWrapper>
)

const LabelWrapper = styled.label`
  ${styles.radioLabel};
`
const RoundedBox = styled.div`
  ${styles.roundedBox};
`

RadioButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

RadioButton.displayName = 'RadioButton'

export default RadioButton
