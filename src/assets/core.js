import { range } from '../utils/helpers'

export const BORDERS = [0, '1px solid', '2px solid', '3px solid', '4px solid']

const breakpoints = ['30rem', '48rem', '80rem']
const [sm, md, lg] = breakpoints
breakpoints.sm = sm
breakpoints.md = md
breakpoints.lg = lg
export const BREAKPOINTS = breakpoints

export const FONTS = {
  primary:
    '"Helvetica Now", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    '"Helvetica Now", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}

export const FONT_WEIGHTS = {
  lighter: '300',
  normal: '500',
  bold: '600'
}

export const FONT_SIZES = ['12px', '14px', '16px', '20px', '24px', '32px']

export const LINE_HEIGHTS = {
  base: 1,
  title: 2,
  largeTitle: 2.5,
  paragraph: 1.5,
  tooltip: 1.6,
  button: 2
}

export const LETTER_SPACINGS = {
  normal: 'normal',
  base: '0.2px',
  tight: '-0.2px',
  tighter: '-0.4px',
  tightest: '-1.2px'
}

export const RADII = {
  none: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  8: 8,
  16: 16,
  round: '50%'
}

export const SHADOWS = {
  etvasCard: '0px 2px 4px rgba(19, 51, 77, 0.15)',
  phoneNumberInputUp:
    '0px -1px 3px rgba(8, 8, 8, 0.08), 0px -1px 2px rgba(8, 8, 8, 0.16)',
  phoneNumberInputDown:
    '0px 1px 3px rgba(8, 8, 8, 0.08), 0px 1px 2px rgba(8, 8, 8, 0.16)'
}

const GUTTER = 4

export const SPACE = range(0, 100, GUTTER)

export const Z_INDICES = {
  menu: 5,
  modal: 10
}
