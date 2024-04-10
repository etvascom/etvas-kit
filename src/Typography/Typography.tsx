import { LabelHTMLAttributes, PropsWithChildren } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
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

import { VariantProp } from '../utils/types'
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
  variant: VariantProp<VariantKey>
  overflowWrap?: CSS.Property.OverflowWrap
}

const Typography = styled.div<PropsWithChildren<TypographyProps>>(
  ({ overflowWrap }) =>
    css({
      color: 'text',
      overflowWrap
    }) as any,
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
        (css({
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: `${truncate}`,
          WebkitBoxOrient: 'vertical'
        } as SystemStyleObject) as any)
)

Typography.defaultProps = {
  as: 'div',
  variant: 'default',
  overflowWrap: 'normal'
}

Typography.displayName = 'Typography'

export default Typography
