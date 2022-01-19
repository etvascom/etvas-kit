import React, { useMemo, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { Checkbox } from '../Checkbox'
import sizes from '../assets/sizes'

const DropdownItem = ({
  children,
  onSelectItem,
  disabled,
  isSelected,
  isHovering,
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

  const optionContent = <TextWrapper>{children}</TextWrapper>

  const optionWithCheckbox = (
    <Flex alignItems='center' minWidth='0'>
      <Box mr={3}>
        <Checkbox
          size='small'
          checked={isSelected}
          onChange={_handleClick}
          onClick={e => e.stopPropagation()}
        />
      </Box>
      {optionContent}
    </Flex>
  )

  useLayoutEffect(() => {
    if (isHovering) {
      optionRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    }
  }, [isHovering])

  return (
    <Option
      role='option'
      onClick={_handleClick}
      selected={isSelected}
      hovering={isHovering}
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
    whiteSpace: 'nowrap'
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
  isHovering: PropTypes.bool,
  disabled: PropTypes.bool,
  hasCheckbox: PropTypes.bool,
  onSelectItem: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
}

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false,
  isHovering: false,
  checkbox: false
}

export default DropdownItem
