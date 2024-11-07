import type * as CSS from 'csstype'
import styled from 'styled-components'
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  ColorStyleProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  flexbox
} from 'styled-system'
import {
  background,
  border,
  color,
  colorStyle,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'

import { pointerEvents, visibility } from '../utils/customProps'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    ShadowProps,
    ColorProps,
    ColorStyleProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    FlexboxProps {
  pointerEvents?: CSS.Property.PointerEvents
  visibility?: CSS.Property.Visibility
}

export const Box = styled.div<BoxProps>`
  ${compose(
    background,
    border,
    color,
    colorStyle,
    layout,
    pointerEvents,
    position,
    shadow,
    space,
    typography,
    visibility,
    flexbox
  )};
`
