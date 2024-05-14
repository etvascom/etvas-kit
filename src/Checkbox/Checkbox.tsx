import React, {
  FC,
  LabelHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'

import styled from 'styled-components'

import { Flex } from '../Flex'
import { Icon, IconProps } from '../Icon'
import { Typography, TypographyProps } from '../Typography'

export interface CheckboxProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'size'>,
    Partial<Pick<TypographyProps, 'variant'>>,
    Pick<IconProps, 'size'> {
  label?: ReactNode
  checked?: boolean
  name: string
  disabled?: boolean
  onChange?: (event: any) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  color = 'brand',
  checked,
  name,
  id,
  onChange,
  size = 'medium',
  variant = 'base14Light',
  disabled = false,
  ...props
}) => {
  const [isChecked, setChecked] = useState(!!checked)

  useEffect(() => {
    setChecked(!!checked)
  }, [checked])

  const handleChange = useCallback(
    (event: any) => {
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
          ml={2}>
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
