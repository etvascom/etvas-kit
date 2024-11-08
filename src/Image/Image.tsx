import { FC } from 'react'

import styled from 'styled-components'
import {
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
  compose,
  layout,
  position,
  space
} from 'styled-system'

interface ImageProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps {
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  src?: string
  srcSet?: string
  alt: string
}

export const Image: FC<ImageProps> = ({
  alt = 'image placeholder',
  ...props
}: ImageProps) => <ImageWrapper alt={alt} {...props} />

export const ImageWrapper = styled.img<ImageProps>`
  object-fit: ${({ objectFit }) => objectFit};
  ${compose(border, layout, position, space)};
`
