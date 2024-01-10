import { LabelHTMLAttributes, PropsWithChildren } from 'react'

import css from '@styled-system/css'
import type * as CSS from 'csstype'
import styled from 'styled-components'
import {
  ColorProps,
  LayoutProps,
  SizeProps,
  SpaceProps,
  TypographyProps as StyledSystemTypographyProps,
  TextStyleProps
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

export interface TypographyProps
  extends Omit<LabelHTMLAttributes<HTMLDivElement>, 'color'>,
    ColorProps,
    LayoutProps,
    SpaceProps,
    SizeProps,
    TextStyleProps,
    StyledSystemTypographyProps {
  as?: string
  truncate?: boolean | number | string
  variant: VariantKey | VariantKey[] | object | string | string[] // allowing string and string[] lets us specify custom variants in components that override the default typography variants such as sublabel
  overflowWrap?: CSS.Property.OverflowWrap
}

const Typography = styled.div<PropsWithChildren<TypographyProps>>(
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
