import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '../Flex'
import { Typography } from '../Typography'
import { compose } from 'styled-system'

interface ChipProps {
  color?: string
  isRounded?: boolean
  children?: React.ReactNode
  label?: React.ReactNode
  contentColor?: string
  isNeutral?: boolean
}

export const Chip: FC<ChipProps> = ({
  color = 'etvasLight',
  isRounded,
  children,
  label,
  isNeutral = false,
  contentColor = 'baseWhite'
}) => (
  <ChipContainer
    color={isNeutral ? 'baseGrayLightest' : color}
    contentColor={isNeutral ? 'baseBlack' : contentColor}
    borderRadius={isNeutral ? '40px' : isRounded ? '3px' : 0}>
    <ChipText
      color='inherit'
      isNeutral={isNeutral}
      variant={isNeutral ? 'base14Light' : 'base12Bold'}>
      {label || children}
    </ChipText>
  </ChipContainer>
)

interface ChipContainerProps {
  color: string
  contentColor: string
}

const ChipContainer = styled(Flex)<ChipContainerProps>(
  compose(({ color, contentColor }) =>
    css({
      py: 1,
      px: 2,
      whiteSpace: 'nowrap',
      alignItems: 'center',
      width: 'fit-content',
      color: contentColor,
      backgroundColor: color
    })
  )
)

interface ChipTextProps {
  isNeutral: boolean
}

const ChipText = styled(Typography)<ChipTextProps>(
  compose(({ isNeutral }) =>
    css({
      textTransform: !isNeutral ? 'uppercase' : 'none'
    })
  )
)

Chip.displayName = 'Chip'
