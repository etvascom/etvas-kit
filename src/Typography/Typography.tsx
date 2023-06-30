import styled from 'styled-components'
import css from '@styled-system/css'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps as StyledTypographyProps,
  color,
  colorStyle,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant
} from 'styled-system'
import variants, { TypographyVariants } from './variants'

interface TypographyProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    StyledTypographyProps,
    TextStyleProps {
  as?: string
  children?: React.ReactNode
  truncate?: boolean | number | string
  variant?:
    | TypographyVariants
    | TypographyVariants[]
    | Record<string, TypographyVariants>
}

const Typography = styled.div<TypographyProps>(
  compose(
    color,
    colorStyle,
    layout,
    space,
    textStyle,
    typography,
    variant({
      variants
    }),
    css({
      color: 'text'
    }),
    ({ truncate }) =>
      typeof truncate === 'boolean'
        ? truncate &&
          css({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          })
        : truncate &&
          css({
            overflow: 'hidden',
            display: '-webkit-box'
          })
  )
)

Typography.defaultProps = {
  as: 'div',
  variant: 'default'
}

Typography.displayName = 'Typography'

export default Typography
