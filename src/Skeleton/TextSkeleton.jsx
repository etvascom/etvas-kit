import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { compose, layout, space } from 'styled-system'
import range from 'lodash/range'
import random from 'lodash/random'

import { BlockSkeleton } from './BlockSkeleton'

const width = (i, lines, justify) => {
  if (justify === 'random') return `${random(75, 100)}%`

  if (justify === 'last' && i && i === lines - 1) {
    return '90%'
  }

  return '100%'
}

export const TextSkeleton = ({ lines, justify, ...props }) => {
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

TextSkeleton.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  lines: PropTypes.number,
  justify: PropTypes.oneOf(['last', 'random', 'equal'])
}

TextSkeleton.defaultProps = {
  lines: 1,
  justify: 'last'
}

const Wrapper = styled.div(compose(layout, space))
