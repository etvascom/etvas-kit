import { FC } from 'react'

import { styled } from 'styled-components'
import {
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

import { Box, BoxProps } from '../Box'

interface ImageStackProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    BoxProps {
  sources: string[]
  alt?: string
  maxImagesShown?: number
  width?: number | string
  height?: number | string
  zIndex?: number
}

export const ImageStack: FC<ImageStackProps> = ({
  sources,
  alt = 'image-stack',
  maxImagesShown,
  width,
  height,
  zIndex: baseZIndex = 0,
  ...rest
}) => {
  if (!sources?.length) {
    return null
  }

  const validSources = sources.slice(0, maxImagesShown)
  const images: ImageEntity[] = validSources?.map((source, index) => ({
    source,
    xOffset: offsetOf(index),
    yOffset: offsetOf(index),
    zIndex: baseZIndex + (validSources.length - index)
  }))

  const { totalWidth, totalHeight } = computeDimensions({
    width,
    height,
    images
  })

  return (
    <Box
      aria-labelledby={alt}
      position='relative'
      width={`${totalWidth}px`}
      height={`${totalHeight}px`}
      {...rest}>
      {images?.map(image => (
        <BoxImage
          width={width}
          height={height}
          zIndex={image.zIndex}
          top={image.yOffset}
          left={image.xOffset}
          src={image.source}
        />
      ))}
    </Box>
  )
}

interface ImageEntity {
  source: string
  xOffset: number
  yOffset: number
  zIndex: number
}

const offsetOf = (index: number) => {
  const SCALE_FACTOR = 20

  // first image should have no offset
  if (index === 0) {
    return 0
  }

  return Math.log(index + 1) * SCALE_FACTOR
}

const computeDimensions = ({
  width,
  height,
  images
}: {
  width?: number | string
  height?: number | string
  images: ImageEntity[]
}): {
  totalWidth: number
  totalHeight: number
} => {
  const parseDimension = (dimension: number | string) =>
    typeof dimension === 'number'
      ? dimension
      : parseInt(dimension.replace('px', ''))

  const baseWidth = parseDimension(width ?? 0)
  const baseHeight = parseDimension(height ?? 0)

  const xOffsetMax = Math.max(...images.map(image => image.xOffset))
  const yOffsetMax = Math.max(...images.map(image => image.yOffset))

  return {
    totalWidth: baseWidth + xOffsetMax,
    totalHeight: baseHeight + yOffsetMax
  }
}

interface BoxImageProps extends BoxProps {
  src: string
  top: number
  left: number
}

const BoxImage = styled(Box)<BoxImageProps>`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  border-radius: 4px;
  box-shadow:
    0px 2px 4px 0 #08080814,
    0px 3px 6px 0 #0808081a;
`
