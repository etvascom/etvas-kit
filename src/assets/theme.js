import { buildTheme } from '@ivoryio/kogaio/utils'
import {
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  TEXT_STYLES
} from './core'
import { buttons } from '../Button'
import { DROPDOWN_VARIANTS } from '../Dropdown'
import { INPUT_VARIANTS } from '../Input'
import { typography } from '../Typography'

import colors from './colors'
import fonts from './fonts'
import shadows from './shadows'
import breakpoints from './breakpoints'

const theme = buildTheme({
  dropdowns: DROPDOWN_VARIANTS,
  fontWeights: FONT_WEIGHTS,
  inputs: INPUT_VARIANTS,
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  textStyles: TEXT_STYLES,
  breakpoints,

  // basic*s
  fonts,
  colors,
  shadows,

  // variants
  buttons,
  typography,

  // Components
  Typography: typography.default
})

export default theme
