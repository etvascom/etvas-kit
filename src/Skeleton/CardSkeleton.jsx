import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { compose, layout, space } from 'styled-system'

import { BlockSkeleton } from './BlockSkeleton'
import { Flex } from './Flex'
import { Box } from './Box'

const dimensions = (position, size) => ({
  width:
    position === 'top' || position === 'bottom' ? 'unset' : `${size * 100}%`,
  height:
    position === 'left' || position === 'right' ? 'unset' : `${size * 100}%`
})

export const CardSkeleton = ({
  imagePosition,
  children,
  imageSize,
  ...props
}) => {
  let direction
  let borderRadius

  switch (imagePosition) {
    case 'top':
      direction = 'column'
      borderRadius = '10px 10px 2px 2px'
      break
    case 'right':
      direction = 'row-reverse'
      borderRadius = '2px 10px 10px 2px'
      break
    case 'left':
      direction = 'row'
      borderRadius = '10px 2px 2px 10px'
      break
    case 'bottom':
      direction = 'column-reverse'
      borderRadius = '2px 2px 10px 10px'
      break
    default:
      break
  }

  return (
    <Wrapper {...props} style={{ borderRadius }}>
      <Flex
        height='100%'
        width='100%'
        justifyContent='stretch'
        alignItems='stretch'
        flexDirection={direction}>
        <Box {...dimensions(imagePosition, imageSize)} flexGrow='0'>
          <BlockSkeleton width='100%' height='100%' />
        </Box>
        <Box {...dimensions(imagePosition, 1 - imageSize)} p={6}>
          {children}
        </Box>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled.div(
  compose(layout, space),
  css({
    overflow: 'hidden',
    background: 'white'
  })
)

CardSkeleton.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  children: PropTypes.node,
  imagePosition: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  imageSize: PropTypes.number
}

CardSkeleton.defaultProps = {
  imagePosition: 'right',
  imageSize: 1 / 3
}
