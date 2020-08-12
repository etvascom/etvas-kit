import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Flex } from '@ivoryio/kogaio'
import { Card } from './Card'

import styles from './CardWithImage.styles'

const CardWrapper = styled(Card)(styles.container)

const Image = styled.div`
  ${styles.image}
`

const ContentBox = styled(Box)`
  ${styles.contentBox}
`

export const CardWithImage = ({
  imageUrl,
  imageSize,
  vertical,
  variant,
  children,
  ...props
}) => {
  const direction = vertical ? 'column' : ['column', 'row-reverse']
  const contentPadding = variant === 'hero' ? [4, 8] : [2, 4]

  return (
    <CardWrapper vertical={vertical} {...props}>
      <Flex
        flexDirection={direction}
        justifyContent='space-between'
        width='100%'
        height='100%'>
        <ContentBox vertical={vertical} ratio={imageSize}>
          <Image url={imageUrl} />
        </ContentBox>
        <ContentBox
          vertical={vertical}
          ratio={1 - imageSize}
          p={contentPadding}>
          {children}
        </ContentBox>
      </Flex>
    </CardWrapper>
  )
}

CardWithImage.propTypes = {
  ...Card.propTypes,
  variant: PropTypes.oneOf(['default', 'hero']),
  imageUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.number,
  vertical: PropTypes.bool
}

CardWithImage.defaultProps = {
  imageSize: 1 / 3,
  variant: 'default'
}
CardWithImage.displayName = 'CardWithImage'
