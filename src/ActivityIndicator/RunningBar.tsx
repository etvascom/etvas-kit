import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

import { Box } from '../Box'
import { themed } from '../utils'

interface Props {
  colors: {
    background: string
    primary: string
  }
}

export const RunningBar:FC<Props> = ({ colors: { background, primary }, ...props }) => (
  <Bar
    bg={background}
    height='4px'
    overflow='hidden'
    position='relative'
    primary={primary}
    width={1}
    {...props}
  />
)

const loading = keyframes`
  from {
    left: -200px;
    width: 30%;
  }
  50% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  to {
    left: 100%;
  }
`

interface BarProps {
  primary: string
}

const Bar = styled(Box)<BarProps>`
  &:before {
    animation: ${loading} 2s linear infinite;
    background-color: ${({ primary }) => themed(`colors.${primary}`, primary)};
    content: '';
    display: block;
    height: 100%;
    left: -200px;
    position: absolute;
    width: 200px;
  }
`

RunningBar.defaultProps = {
  colors: {
    background: 'baseWhite',
    primary: 'brand'
  }
}
