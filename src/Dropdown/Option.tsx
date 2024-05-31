import React, {
  FC,
  OptionHTMLAttributes,
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import { Box } from '../Box'
import { Checkbox } from '../Checkbox'
import { Flex } from '../Flex'
import { typography } from '../Typography'
import sizes from '../assets/sizes'

export interface OptionProps extends OptionHTMLAttributes<HTMLDivElement> {
  onSelectItem?: (value: any) => void
  hasKeyboardFocus?: boolean
  hasCheckbox?: boolean
  value: any
}

const DropdownItem: FC<PropsWithChildren<OptionProps>> = ({
  id,
  children,
  onSelectItem,
  disabled = false,
  selected = false,
  hasKeyboardFocus = false,
  value,
  hasCheckbox = false,
  ...props
}) => {
  const optionRef = useRef<HTMLDivElement>(null)

  const _handleClick = () => {
    if (!disabled) {
      onSelectItem && onSelectItem(value)
    }
  }

  const hasTouch = useMemo(
    () =>
      'ontouchstart' in document.documentElement ||
      navigator.maxTouchPoints > 0,
    []
  )

  const optionContent = (
    <TextWrapper aria-selected={hasKeyboardFocus}>{children}</TextWrapper>
  )

  const optionWithCheckbox = (
    <Flex alignItems='center' minWidth='0' aria-selected={hasKeyboardFocus}>
      <Box mr={3}>
        <Checkbox
          size='small'
          checked={selected}
          aria-checked={selected}
          onChange={_handleClick}
          onClick={e => e.stopPropagation()}
        />
      </Box>
      {optionContent}
    </Flex>
  )

  useLayoutEffect(() => {
    if (hasKeyboardFocus) {
      optionRef.current?.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      })
    }
  }, [hasKeyboardFocus])

  return (
    <Option
      id={id}
      role='option'
      onClick={_handleClick}
      selected={selected}
      hovering={hasKeyboardFocus}
      touch={hasTouch}
      hasCheckbox={hasCheckbox}
      ref={optionRef}
      {...props}>
      {hasCheckbox ? optionWithCheckbox : optionContent}
    </Option>
  )
}

const TextWrapper = styled.div(
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%'
  }) as any
)

interface StyledOptionProps
  extends Pick<OptionProps, 'hasCheckbox' | 'selected'> {
  hovering?: OptionProps['hasKeyboardFocus']
  touch?: boolean
}

const Option = styled(Flex)<StyledOptionProps>(
  css({
    ...typography.labelSmall,
    paddingLeft: 3,
    paddingRight: 3,
    appearance: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none',
    height: sizes.dropdownItemHeightMobile,
    lineHeight: sizes.dropdownItemHeightMobile
  } as SystemStyleObject) as any,
  (({ hovering }: StyledOptionProps) =>
    hovering
      ? css({
          backgroundColor: 'brandLighter'
        })
      : null) as any,
  (({ touch }: StyledOptionProps) =>
    !touch
      ? css({
          '&:hover': {
            backgroundColor: 'brandLighter'
          }
        })
      : null) as any,
  (({ selected, hasCheckbox }: StyledOptionProps) =>
    selected && !hasCheckbox
      ? css({
          backgroundColor: 'brand',
          color: 'white',
          '&:hover': {
            backgroundColor: 'brand'
          }
        })
      : null) as any
)

export default DropdownItem
