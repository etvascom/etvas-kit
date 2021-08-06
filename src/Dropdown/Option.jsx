import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'
import Flex from '@ivoryio/kogaio/Responsive/Flex'
import Box from '@ivoryio/kogaio/Responsive/Box'
import { Checkbox } from '../Checkbox'
import sizes from '../assets/sizes'

const DropdownItem = ({
  children,
  onSelectItem,
  disabled,
  isSelected,
  value,
  hasCheckbox
}) => {
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
    <Flex justifyContent='center' minWidth='0'>
      <Box mr={3} mt={2}>
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

  return (
    <Option
      role='option'
      onClick={_handleClick}
      selected={isSelected}
      touch={hasTouch}
      hasCheckbox={hasCheckbox}>
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
  checkbox: false
}

export default DropdownItem
