import styled from 'styled-components'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import { compose, layout, space } from 'styled-system'

export const BlockSkeleton = styled.div(
  compose(layout, space),
  css({
    borderRadius: 2,
    backgroundColor: 'skeleton'
  })
)

BlockSkeleton.propTypes = {
  ...propTypes.space,
  ...propTypes.layout
}
