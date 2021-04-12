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
  multiple
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

  const optionWithCheckbox = (
    <Flex alignItems='center'>
      <Box mr={3}>
        <Checkbox size='small' checked={isSelected} pointerEvents='none' />
      </Box>
      {children}
    </Flex>
  )

  return (
    <Option
      role='option'
      onClick={_handleClick}
      selected={isSelected}
      touch={hasTouch}
      multiple={multiple}>
      {multiple ? optionWithCheckbox : children}
    </Option>
  )
}

const Option = styled(Flex)(
  css({
    ...typography.labelSmall,
    paddingLeft: 3,
    appearance: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none',
    height: sizes.inputHeight
  }),
  ({ touch }) =>
    !touch
      ? css({
          ':hover': {
            backgroundColor: 'brandLighter'
          }
        })
      : null,
  ({ selected, multiple }) =>
    selected && !multiple
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
  multiple: PropTypes.bool,
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
