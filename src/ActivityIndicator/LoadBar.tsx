import { FC } from 'react'

import styled, { css, keyframes } from 'styled-components'

import { Box } from '../Box'

interface Props {
  colors: string[]
}

export const LoadBar: FC<Props> = ({
  colors = ['statusWarning', 'statusSuccess', 'statusError'],
  ...props
}) => (
  <Box bg='brand' height='4px' position='relative' width={1} {...props}>
    {colors.map(color => (
      <Bar bg={color} colorList={colors} key={color} />
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

const loopColors = ({ colorList }: BarProps) =>
  colorList.map(
    (_, ix) => css`
      &:nth-child(n + ${ix + 1}) {
        animation: ${loading} ${colorList.length}s linear ${ix}s infinite;
      }
    `
  )

interface BarProps {
  colorList: string[]
}

const Bar = styled(Box)<BarProps>`
  content: '';
  display: inline;
  height: 100%;
  left: 50%;
  position: absolute;
  text-align: center;
  width: 0;

  ${loopColors};
`