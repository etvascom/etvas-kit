import React, { FC, HTMLAttributes, PropsWithChildren } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'
import { LayoutProps, SpaceProps, compose, layout, space } from 'styled-system'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { BlockSkeleton } from './BlockSkeleton'

interface CardSkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    LayoutProps,
    SpaceProps {
  imagePosition?: 'top' | 'right' | 'left' | 'bottom'
  imageSize?: number
}

export const CardSkeleton: FC<PropsWithChildren<CardSkeletonProps>> = ({
  imagePosition = 'right',
  imageSize = 1 / 3,
  children,
  ...props
}) => {
  const { borderRadius, flexDirection } =
    imagePositionToPropsMapping[imagePosition]

  return (
    <Wrapper {...props} style={{ borderRadius }}>
      <Flex
        height='100%'
        width='100%'
        justifyContent='stretch'
        alignItems='stretch'
        flexDirection={flexDirection}>
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

const imagePositionToPropsMapping: {
  [key: string]: {
    flexDirection: 'column' | 'row' | 'row-reverse' | 'column-reverse'
    borderRadius: string
  }
} = {
  top: {
    flexDirection: 'column',
    borderRadius: '10px 10px 2px 2px'
  },
  right: {
    flexDirection: 'row-reverse',
    borderRadius: '2px 10px 10px 2px'
  },
  left: {
    flexDirection: 'row',
    borderRadius: '10px 2px 2px 10px'
  },
  bottom: {
    flexDirection: 'column-reverse',
    borderRadius: '2px 2px 10px 10px'
  }
}

const dimensions = (
  position: CardSkeletonProps['imagePosition'],
  size: number
) => ({
  width:
    position === 'top' || position === 'bottom' ? 'unset' : `${size * 100}%`,
  height:
    position === 'left' || position === 'right' ? 'unset' : `${size * 100}%`
})
