import React, { FC, HTMLAttributes, useMemo } from 'react'

import random from 'lodash/random'
import range from 'lodash/range'
import styled from 'styled-components'
import { LayoutProps, SpaceProps, compose, layout, space } from 'styled-system'

import { BlockSkeleton } from './BlockSkeleton'

interface TextSkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    SpaceProps,
    LayoutProps {
  lines?: number
  justify?: 'last' | 'random' | 'equal'
}

export const TextSkeleton: FC<TextSkeletonProps> = ({
  lines = 1,
  justify = 'last',
  ...props
}) => {
  const items = useMemo(() => range(lines), [lines])

  return (
    <Wrapper {...props}>
      {items.map(i => (
        <BlockSkeleton
          key={i}
          height='16px'
          width={width(i, lines, justify)}
          mt={i ? 4 : 0}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div(compose(layout, space))

const width = (
  i: number,
  lines: number,
  justify: TextSkeletonProps['justify']
): string => {
  if (justify === 'random') return `${random(75, 100)}%`

  if (justify === 'last' && i && i === lines - 1) {
    return '90%'
  }

  return '100%'
}
