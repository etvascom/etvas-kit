import { FC, PropsWithChildren } from 'react'

import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Card, CardProps } from './Card'
import styles from './CardWithImage.styles'

interface Props extends Omit<CardProps, 'variant'> {
  imageUrl: string
  imageSize?: number | number[]
  imageContain?: string | string[]
  vertical?: boolean
  imgOnLeft?: boolean
  contentPadding?: number | number[]
  imagePadding?: number | number[]
  variant?: 'default' | 'hero'
}

export const CardWithImage: FC<PropsWithChildren<Props>> = ({
  imageUrl,
  imageSize = 1 / 3,
  imageContain = 'cover',
  vertical,
  variant = 'default',
  children,
  imgOnLeft,
  contentPadding,
  imagePadding = 0,
  ...props
}) => {
  const flexDirection: any = vertical
    ? 'column'
    : ['column', imgOnLeft ? 'row' : 'row-reverse']

  const defaultContentPadding = variant === 'hero' ? [4, 8] : [2, 4]

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
        <ContentBox vertical={vertical} ratio={imageSize} p={imagePadding}>
          <Image url={imageUrl} contain={imageContain} />
        </ContentBox>
        <ContentBox
          vertical={vertical}
          p={contentPadding ?? defaultContentPadding}
          ratio={invImageSize}>
          {children}
        </ContentBox>
      </Flex>
    </CardWrapper>
  )
}

const CardWrapper = styled(Card)<any>(styles.container)

interface ImageProps {
  url: Props['imageUrl']
  contain: Props['imageContain']
}

const Image = styled.div<ImageProps>`
  ${styles.image as any}
`

interface ContentBoxProps {
  vertical?: Props['vertical']
  ratio?: Props['imageSize']
}

const ContentBox = styled(Box)<ContentBoxProps>`
  ${styles.contentBox as any}
`

CardWithImage.displayName = 'CardWithImage'
