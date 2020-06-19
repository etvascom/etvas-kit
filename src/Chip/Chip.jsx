import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

export const Chip = ({
  color,
  isRounded,
  children,
  label,
  onClick,
  onDismiss
}) => {
  return (
    <ChipContainer color={color} isRounded={isRounded} px={2} py={1}>
      <Typography variant='labelButton' color='inherit'>
        {label || children}
      </Typography>
    </ChipContainer>
  )
}

const ChipContainer = styled(Flex)(({ isRounded, color }) =>
  css({
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    backgroundColor: color,
    color: 'white',
    borderRadius: isRounded ? '32px' : 0
  })
)

Chip.propTypes = {
  color: PropTypes.string,
  isRounded: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.node,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func
}

Chip.defaultProps = {
  color: 'brand'
}

Chip.displayName = 'Chip'
