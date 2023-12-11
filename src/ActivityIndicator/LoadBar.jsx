import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { Box } from '../Box'

export const LoadBar = ({ colors, ...props }) => (
  <Box bg='brand' height='4px' position='relative' width={1} {...props}>
    {colors.map(color => (
      <Bar bg={color} colourList={colors} key={color} />
    ))}
  </Box>
)

const loading = keyframes`
  from {
    left: 50%;
    width: 0;
    z-index: 100;
  }
  33.3333% {
    left: 0;
    width: 100%;
    z-index: 10;
  }
  to {
    left: 0;
    width: 100%;
  }
`

const loopColours = ({ colourList }) =>
  colourList.map(
    (color, ix) => css`
      &:nth-child(n + ${ix + 1}) {
        animation: ${loading} ${colourList.length}s linear ${ix}s infinite;
      }
    `
  )

const Bar = styled(Box)`
  content: '';
  display: inline;
  height: 100%;
  left: 50%;
  position: absolute;
  text-align: center;
  width: 0;

  ${loopColours};
`

LoadBar.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
}
LoadBar.defaultProps = {
  colors: ['statusWarning', 'statusSuccess', 'statusError']
}
