import React, { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Box } from '../Box'
import { compose } from 'styled-system'

interface LoadBarProps {
  colors?: string[]
}

export const LoadBar: FC<LoadBarProps> = ({
  colors = defaultColors,
  ...props
}) => (
  <Box bg='brand' height='4px' position='relative' width={1} {...props}>
    {colors.map(color => (
      <Bar bg={color} colors={colors} key={color} />
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

const loopColors = ({ colors }: Required<LoadBarProps>) =>
  colors.map(
    (_: any, index: number) => css`
      &:nth-child(n + ${index + 1}) {
        animation: ${loading} ${colors.length}s linear ${index}s infinite;
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

  ${compose(loopColors)};
`

const defaultColors = ['statusWarning', 'statusSuccess', 'statusError']
