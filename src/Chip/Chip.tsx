import { FC, PropsWithChildren, ReactNode } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Typography, TypographyProps } from '../Typography'

interface Props {
  color?: string
  isRounded?: boolean
  label?: ReactNode
  contentColor?: string
  isNeutral?: boolean
  typographyVariant?: TypographyProps['variant']
}

export const Chip: FC<PropsWithChildren<Props>> = ({
  color = 'etvasLight',
  isRounded,
  children,
  label,
  isNeutral = false,
  contentColor = 'baseWhite',
  typographyVariant
}) => (
  <ChipContainer
    color={isNeutral ? 'baseGrayLightest' : color}
    contentColor={isNeutral ? 'baseBlack' : contentColor}
    borderRadius={isNeutral ? '40px' : isRounded ? '3px' : 0}>
    <ChipText
      color='inherit'
      isNeutral={isNeutral}
      variant={typographyVariant || (isNeutral ? 'base14Light' : 'base12Bold')}>
      {label || children}
    </ChipText>
  </ChipContainer>
)

interface ChipContainerProps extends Pick<Props, 'color' | 'contentColor'> {}

const ChipContainer = styled(Flex)<ChipContainerProps>(
  ({ color, contentColor }) =>
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
interface ChipTextProps {
  isNeutral?: boolean
}

const ChipText = styled(Typography)<ChipTextProps>(({ isNeutral }) =>
  css({
    textTransform: !isNeutral ? 'uppercase' : 'none'
  })
)

Chip.displayName = 'Chip'
