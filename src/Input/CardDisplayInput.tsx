import React, { FC, InputHTMLAttributes, useMemo } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { v4 } from 'uuid'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Label } from '../Label'
import { Touchable } from '../Touchable'
import { typography } from '../Typography'
import sizes from '../assets/sizes'
import { VariantProp } from '../utils/types'
import { default as variants } from './CardDisplayInput.variants'
import { SubLabel } from './SubLabel'

type VariantKey = keyof typeof variants

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean
  disabled?: boolean
  label?: React.ReactNode
  noBottomSpace?: boolean
  onEdit: () => void
  variant?: VariantProp<VariantKey>
  subLabel?: string
}

export const CardDisplayInput: FC<Props> = ({
  disabled,
  id,
  label,
  name,
  noBottomSpace = false,
  onEdit,
  value = '',
  variant = 'default',
  subLabel,
  autoFocus = false,
  ...rest
}) => {
  id = id || v4()

  const inputVariant = useMemo(() => {
    if (disabled) return 'disabled'
    return variant
  }, [disabled, variant])

  const handleEdit = () => {
    if (!disabled) {
      onEdit()
    }
  }

  return (
    <Flex flexDirection='column' width={1} {...rest}>
      {!!label && <Label label={label} inputId={id} />}
      <Flex alignItems='center' position='relative' width='100%'>
        <StyledInput
          aria-disabled={disabled}
          id={id?.toString()}
          name={name}
          readOnly={true}
          value={value ? `●●●● ●●●● ●●●● ${value.toString().slice(-4)}` : ''}
          variant={inputVariant}
          autoFocus={autoFocus}
          {...rest}
        />
        <Flex pointerEvents='auto' position='absolute' right={2}>
          <StyledTouchable
            onClick={handleEdit}
            pointerEvents={disabled ? 'none' : 'initial'}
            effect='highlight'
          >
            <Icon
              mr={5}
              size='small'
              name='edit'
              color={disabled ? 'inputBorderGray' : 'inputIcon'}
            />
          </StyledTouchable>
        </Flex>
      </Flex>
      <SubLabel
        content={subLabel || ''}
        variant={inputVariant}
        preserveSpace={!noBottomSpace}
      />
    </Flex>
  )
}

const StyledInput = styled.input<Omit<Props, 'onEdit'>>(
  css({
    ...typography.labelSmall,
    display: 'block',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
    outline: 'none',
    color: 'text',
    padding: 3,
    '&:hover, &:focus': {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  } as SystemStyleObject),
  variant({ variants })
)

const StyledTouchable = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${sizes.buttonMinWidth};
  height: ${sizes.buttonMinWidth};
`

CardDisplayInput.displayName = 'Input'
