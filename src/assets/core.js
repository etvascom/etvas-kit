import { buildTheme } from '@ivoryio/kogaio/utils'

const kogaioTheme = buildTheme({})

const {
  borders,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  textStyles
} = kogaioTheme

export const BORDERS = [...borders]

export const BREAKPOINTS = {
  ...breakpoints
}

// #region font
export const FONTS = {
  primary:
    '"Helvetica Now", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}

export const FONT_WEIGHTS = {
  ...fontWeights,
  lighter: '300',
  bold: '600',
  black: '900'
}
export const FONT_SIZES = [...fontSizes]
export const LETTER_SPACINGS = {
  ...letterSpacings
}
export const LINE_HEIGHTS = {
  ...lineHeights,
  buttonLabel: '14px',
  inputLabel: '16px'
}
export const TEXT_STYLES = {
  ...textStyles,
  capitalize: {
    ...textStyles.caps,
    'text-transform': 'capitalize'
  }
}
// #endregion

export const RADII = {
  ...radii
}
export const SHADOWS = {
  ...shadows,
  etvasCard: '0px 2px 4px rgba(19, 51, 77, 0.15)',
  phoneNumberInputUp:
    '0px -1px 3px rgba(8, 8, 8, 0.08), 0px -1px 2px rgba(8, 8, 8, 0.16)',
  phoneNumberInputDown:
    '0px 1px 3px rgba(8, 8, 8, 0.08), 0px 1px 2px rgba(8, 8, 8, 0.16)'
}
export const SPACE = [...space]
