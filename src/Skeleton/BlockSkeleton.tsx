import css from '@styled-system/css'
import styled from 'styled-components'
import { LayoutProps, SpaceProps, compose, layout, space } from 'styled-system'

interface BlockSkeletonProps extends SpaceProps, LayoutProps {}

export const BlockSkeleton = styled.div<BlockSkeletonProps>(
  compose(layout, space),
  css({
    borderRadius: 2,
    backgroundColor: 'skeleton'
  })
)
