import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'

import { Box, Flex } from '../'
import { Card } from './Card'

import variants from './CardWithImage.variants'
import styles from './CardWithImage.styles'

const CardWrapper = styled(Card)(
  styles.container,
  variant({
    variants
  })
)

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
  children,
  ...props
}) => {
  const direction = vertical ? 'column' : ['column', 'row-reverse']
  const contentPadding = [2, 4]

  return (
    <CardWrapper vertical={vertical} {...props}>
      <Flex
        flexDirection={direction}
        justifyContent='space-between'
        width='100%'
        height='100%'>
        <ContentBox vertical={vertical} ratio={imageSize}>
          <Image url={imageUrl}> </Image>
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
  imageUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.number,
  vertical: PropTypes.bool
}

CardWithImage.defaultProps = {
  imageSize: 1 / 3
}
CardWithImage.displayName = 'CardWithImage'
