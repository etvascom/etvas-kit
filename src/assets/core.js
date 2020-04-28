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
  textStyles
} = kogaioTheme

export const BORDERS = [...borders]

export const BREAKPOINTS = {
  ...breakpoints
}
export const COLORS = {
  accent: '#EF6319',
  brand: '#015294',
  brandFade: '#B3CBDF',
  accentFade: '#FAD0BA',
  text: '#000000',
  lighterText: '#35373B',
  disabled: '#BABABC',
  outline: '#A0AAB2',
  background: '#FBFDFF',
  white: '#FFFFFF'
}

export const FONTS = {
  primary:
    'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}
export const FONT_WEIGHTS = {
  ...fontWeights,
  normal: '600',
  black: '900'
}
export const FONT_SIZES = [...fontSizes]
export const LETTER_SPACINGS = {
  ...letterSpacings
}
export const LINE_HEIGHTS = {
  ...lineHeights,
  buttonLabel: '14px'
}
export const RADII = {
  ...radii
}
export const SHADOWS = {
  ...shadows
}
export const TEXT_STYLES = {
  ...textStyles,
  capitalize: {
    ...textStyles.caps,
    'text-transform': 'capitalize'
  }
}
