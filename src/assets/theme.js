import { buildTheme } from '@ivoryio/kogaio/utils'
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
  inputs: INPUT_VARIANTS,
  breakpoints,

  // basic*s
  fonts,
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px'],
  fontWeights: {
    ligher: '300',
    bold: '600',
    black: '900'
  },
  colors,
  shadows,

  // variants
  buttons
})

export default theme
