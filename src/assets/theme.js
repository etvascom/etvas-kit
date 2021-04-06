import { buildTheme } from '@ivoryio/kogaio/utils'
import { DROPDOWN_VARIANTS } from '../Dropdown'
import { INPUT_VARIANTS } from '../Input'

import colors from './colors'
import sizes from './sizes'
import animationSpeeds from './animationSpeeds'

const breakpoints = ['30rem', '48rem', '80rem']
const [sm, md, lg] = breakpoints
breakpoints.sm = sm
breakpoints.md = md
breakpoints.lg = lg

const zIndices = {
  menu: 5,
  modal: 10
}

const theme = buildTheme({
  dropdowns: DROPDOWN_VARIANTS,
  inputs: INPUT_VARIANTS,
  breakpoints,

  // basic*s
  fonts: {
    primary:
      '"Helvetica Now", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
    complementary:
      'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
  },
  fontSizes: ['11px', '12px', '14px', '16px', '20px', '24px', '32px', '48px'],
  fontWeights: {
    lighter: '300',
    normal: '500',
    bold: '600',
    black: '900'
  },
  colors,
  shadows: {
    etvasCard: '0px 2px 4px rgba(19, 51, 77, 0.15)'
  },
  zIndices,
  sizes,
  animationSpeeds
})

export default theme
