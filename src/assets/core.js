import { buildTheme } from '@ivoryio/kogaio/utils'
import { css } from 'styled-components'
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
  accent: 'var(--accent-color)',
  brand: 'var(--brand-color)',
  brandFade: 'var(--brandFade-color)',
  accentFade: 'var(--accentFade-color)',
  text: 'var(--text-color)',
  lighterText: 'var(--lighter-text-color)',
  disabled: '#BABABC',
  outline: '#A0AAB2',
  background: '#FBFDFF',
  white: '#FFFFFF'
}

// #region font
export const FONTS = {
  primary:
    'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
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
  buttonLabel: '14px'
}
export const TEXT_STYLES = {
  ...textStyles,
  capitalize: {
    ...textStyles.caps,
    'text-transform': 'capitalize'
  }
}
// #endregion

export const ROOT_STYLE = css`
  :root {
    --accent-color: #ef6319;
    --brand-color: #015294;
    --brandFade-color: #b3cbdf;
    --accentFade-color: #fad0ba;
    --text-color: #000000;
    --lighter-text-color: #35373b;
  }
`

export const RADII = {
  ...radii
}
export const SHADOWS = {
  ...shadows
}
