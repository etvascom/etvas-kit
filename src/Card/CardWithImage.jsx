import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Card } from './Card'
import { Box } from '../Box'
import { Flex } from '../Flex'

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
  imageContain,
  vertical,
  variant,
  children,
  imgOnLeft,
  ...props
}) => {
  const flexDirection = vertical
    ? 'column'
    : ['column', imgOnLeft ? 'row' : 'row-reverse']
  const contentPadding = variant === 'hero' ? [4, 8] : [2, 4]

  const invImageSize = Array.isArray(imageSize)
    ? imageSize.map(size => 1 - size)
    : imageSize
    ? 1 - imageSize
    : undefined

  return (
    <CardWrapper vertical={vertical} {...props}>
      <Flex
        flexDirection={flexDirection}
        justifyContent='space-between'
        width='100%'
        height='100%'>
        <ContentBox vertical={vertical} ratio={imageSize}>
          <Image url={imageUrl} contain={imageContain} />
        </ContentBox>
        <ContentBox vertical={vertical} p={contentPadding} ratio={invImageSize}>
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
  imageContain: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  imageSize: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  vertical: PropTypes.bool,
  imgOnLeft: PropTypes.bool
}

CardWithImage.defaultProps = {
  imageSize: 1 / 3,
  variant: 'default',
  imageContain: 'cover'
}
CardWithImage.displayName = 'CardWithImage'
