import React, { FC } from 'react'

import styled from 'styled-components'

import { Typography } from '../Typography'
import styles from './radio.styles'

export interface RadioButtonProps {
  name: string
  id: string
  label?: React.ReactNode
  value: any
  checked: boolean
  disabled?: boolean
  onChange: (event: any) => void
  variant?: 'normal' | 'checkmark'
}

const RadioButton: FC<RadioButtonProps> = ({
  name,
  id,
  label,
  value,
  checked,
  disabled,
  onChange,
  variant = 'normal'
}) => (
  <LabelWrapper disabled={disabled} variant={variant}>
    <Input
      id={id}
      variant={variant}
      type='radio'
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {variant === 'normal' && (
      <RoundedBox>{checked && <span></span>}</RoundedBox>
    )}
    {label && <Typography variant='labelSmall'>{label}</Typography>}
  </LabelWrapper>
)

const Input = styled.input<RadioButtonProps>`
  ${({ variant }) => variant === 'checkmark' && (styles.checkmarkInput as any)}
`

export interface LabelWrapperProps
  extends Pick<RadioButtonProps, 'variant' | 'disabled'> {}
const LabelWrapper = styled.label<LabelWrapperProps>`
  ${styles.radioLabel as any};
`
const RoundedBox = styled.div`
  ${styles.roundedBox as any};
`

RadioButton.displayName = 'RadioButton'

export default RadioButton
