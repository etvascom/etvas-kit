import { buildTheme } from '@ivoryio/kogaio/utils'
import { DROPDOWN_VARIANTS } from '../Dropdown'
import { INPUT_VARIANTS } from '../Input'

import colors from './colors'

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
      'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
    complementary:
      'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px'],
  fontWeights: {
    ligher: '300',
    bold: '600',
    black: '900'
  },
  colors,
  shadows: {
    etvasCard: '0px 2px 4px rgba(19, 51, 77, 0.15)'
  },
  zIndices
})

export default theme
