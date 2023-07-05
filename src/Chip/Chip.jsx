import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '../Flex'
import { Typography } from '../Typography'

export const Chip = ({
  color,
  isRounded,
  children,
  label,
  isNeutral,
  contentColor,
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

const ChipContainer = styled(Flex)(({ color, contentColor }) =>
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

const ChipText = styled(Typography)(({ isNeutral }) =>
  css({
    textTransform: !isNeutral && 'uppercase'
  })
)

Chip.propTypes = {
  color: PropTypes.string,
  isRounded: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.node,
  contentColor: PropTypes.string,
  isNeutral: PropTypes.bool,
  typographyVariant: PropTypes.string
}

Chip.defaultProps = {
  color: 'etvasLight',
  contentColor: 'baseWhite',
  isNeutral: false
}

Chip.displayName = 'Chip'
