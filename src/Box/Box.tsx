import styled from 'styled-components'
import {
  background,
  border,
  compose,
  shadow,
  color,
  colorStyle,
  layout,
  position,
  space,
  typography,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  ColorProps,
  ColorStyleProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

import { pointerEvents, visibility } from '../utils/customProps'

interface BoxProps
  extends BackgroundProps,
    BorderProps,
    ShadowProps,
    ColorProps,
    ColorStyleProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

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
    visibility
  )};
`
