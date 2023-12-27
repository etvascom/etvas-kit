import css from '@styled-system/css'
import type * as CSS from 'csstype'
import styled from 'styled-components'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps
} from 'styled-system'
import {
  color,
  colorStyle,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant
} from 'styled-system'

import variants from './variants'

type VariantKey = keyof typeof variants

interface Props
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    TextStyleProps,
    TypographyProps {
  as?: string
  children?: React.ReactNode
  truncate?: boolean | number | string
  variant: VariantKey | VariantKey[] | object 
  overflowWrap?: CSS.Property.OverflowWrap
}


const Typography = styled.div<Props>(
  ({ overflowWrap }) =>
    css({
      color: 'text',
      overflowWrap
    }),
  compose(
    color,
    colorStyle,
    layout,
    space,
    textStyle,
    typography,
    variant({
      variants
    })
  ),
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
          display: '-webkit-box',
          lineClamp: `${truncate}`
        })
)

Typography.defaultProps = {
  as: 'div',
  variant: 'default',
  overflowWrap: 'normal'
}

Typography.displayName = 'Typography'

export default Typography
