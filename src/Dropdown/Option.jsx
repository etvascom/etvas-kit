import React, { useLayoutEffect, useMemo, useRef } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../Box'
import { Checkbox } from '../Checkbox'
import { Flex } from '../Flex'
import { typography } from '../Typography'
import sizes from '../assets/sizes'

const DropdownItem = ({
  children,
  onSelectItem,
  disabled,
  isSelected,
  hasKeyboardFocus,
  value,
  hasCheckbox
}) => {
  const optionRef = useRef()

  const _handleClick = () => {
    if (!disabled) {
      onSelectItem(value)
    }
  }

  const hasTouch = useMemo(
    () =>
      'ontouchstart' in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
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
          checked={isSelected}
          aria-checked={isSelected}
          onChange={_handleClick}
          onClick={e => e.stopPropagation()}
        />
      </Box>
      {optionContent}
    </Flex>
  )

  useLayoutEffect(() => {
    if (hasKeyboardFocus) {
      optionRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    }
  }, [hasKeyboardFocus])

  return (
    <Option
      role='option'
      onClick={_handleClick}
      selected={isSelected}
      hovering={hasKeyboardFocus}
      touch={hasTouch}
      hasCheckbox={hasCheckbox}
      ref={optionRef}>
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
  })
)

const Option = styled(Flex)(
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
  }),
  ({ hovering }) =>
    hovering
      ? css({
          backgroundColor: 'brandLighter'
        })
      : null,
  ({ touch }) =>
    !touch
      ? css({
          ':hover': {
            backgroundColor: 'brandLighter'
          }
        })
      : null,
  ({ selected, hasCheckbox }) =>
    selected && !hasCheckbox
      ? css({
          backgroundColor: 'brand',
          color: 'white',
          ':hover': {
            backgroundColor: 'brand'
          }
        })
      : null
)

DropdownItem.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  hasKeyboardFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  hasCheckbox: PropTypes.bool,
  onSelectItem: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ])
}

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false,
  hasKeyboardFocus: false,
  checkbox: false
}

export default DropdownItem
