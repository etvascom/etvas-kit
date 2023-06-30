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
  alt: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  src?: string
  srcSet?: string
}

export const Image = styled.img<ImageProps>`
  object-fit: ${({ objectFit }) => objectFit};
  ${compose(border, layout, position, space)};
`

Image.defaultProps = {
  alt: 'image placeholder'
}
