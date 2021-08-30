import {
  BORDERS,
  BREAKPOINTS,
  FONTS,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACINGS,
  RADII,
  SHADOWS,
  SPACE,
  Z_INDICES
} from '../assets/core'

import { DROPDOWN_VARIANTS } from '../Dropdown'
import { INPUT_VARIANTS } from '../Input'

import colors from './colors'
import sizes from './sizes'
import animationSpeeds from './animationSpeeds'

const theme = {
  dropdowns: DROPDOWN_VARIANTS,
  inputs: INPUT_VARIANTS,

  // basic*s
  borders: BORDERS,
  breakpoints: BREAKPOINTS,
  fonts: FONTS,
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  fontWeights: FONT_WEIGHTS,
  radii: RADII,
  shadows: SHADOWS,
  space: SPACE,
  zIndices: Z_INDICES,
  sizes,
  animationSpeeds,
  colors,

  // TODO: To be updated with: FONT_SIZES
  fontSizes: ['11px', '12px', '14px', '16px', '20px', '24px', '32px', '48px']
}

export default theme
