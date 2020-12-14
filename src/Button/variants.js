import sizes from '../assets/sizes'
import { BORDERS } from '../assets/core'

const BUTTON_DEFAULT = {
  height: sizes.buttonHeight,
  width: sizes.buttonWidth,
  minWidth: sizes.buttonMinWidth,
  alignItems: 'center',
  border: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  label: { cursor: 'pointer', pointerEvents: 'none' },
  ':hover': { opacity: 0.75 },
  ':active ': { transform: 'scale(0.965)' },
  ':focus': { opacity: 0.75, outlineStyle: 'none', outlineColor: 'transparent' },
  ':disabled': { opacity: 0.3, transform: 'scale(1)', cursor: 'not-allowed' }
}
const PRIMARY_DEFAULT = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'brand',
  color: 'white',
  ':hover': { backgroundColor: 'brandDark' },
  ':active': { backgroundColor: 'brandDarkest' },
  ':focus': { opacity: 1 },
  ':disabled': { backgroundColor: 'disabled', transform: 'scale(1)', cursor: 'not-allowed' }
}
const PRIMARY_STYLE = { ...PRIMARY_DEFAULT }
const LARGE_STYLE = { ...PRIMARY_DEFAULT, width: sizes.largeButtonWidth }
const OUTLINE_DEFAULT = { ...BUTTON_DEFAULT, color: 'text', backgroundColor: 'transparent', border: `${BORDERS[1]}` }
const OUTLINE_STYLE = { ...OUTLINE_DEFAULT, borderColor: 'accent' }
const POSITIVE_STYLE = { ...BUTTON_DEFAULT, backgroundColor: 'positive', color: 'white' }
const LINK_DEFAULT = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'transparent',
  height: 'auto',
  padding: 0,
  minHeight: 'max-content',
  ':hover': { color: 'brandDark' },
  ':active': { color: 'brandDarkest' },
  ':disabled': { color: 'disabled', transform: 'scale(1)', cursor: 'not-allowed' }
}
const LINK_STYLE = { ...LINK_DEFAULT, color: 'brand' }
const LINK_POSITIVE_STYLE = {
  ...LINK_DEFAULT,
  color: 'positive',
  ':hover': { opacity: 0.75 },
  ':active': { color: 'positive' }
}
export default {
  primary: PRIMARY_STYLE,
  large: LARGE_STYLE,
  link: LINK_STYLE,
  outline: OUTLINE_STYLE,
  outlineAlt: OUTLINE_STYLE,
  positive: POSITIVE_STYLE,
  linkSecondary: LINK_STYLE,
  linkPositive: LINK_POSITIVE_STYLE
}
export const iconVariants = {
  primary: { color: 'white', size: 'small' },
  large: { color: 'white', size: 'medium' },
  link: { color: 'brand', size: 'small' }
}
const PRIMARY_SPINNER_VARIANT = { primary: 'white' }
export const spinnerVariants = {
  primary: PRIMARY_SPINNER_VARIANT,
  large: PRIMARY_SPINNER_VARIANT,
  link: PRIMARY_SPINNER_VARIANT,
  outline: PRIMARY_SPINNER_VARIANT,
  outlineAlt: PRIMARY_SPINNER_VARIANT,
  positive: PRIMARY_SPINNER_VARIANT,
  linkSecondary: PRIMARY_SPINNER_VARIANT,
  linkPositive: PRIMARY_SPINNER_VARIANT
}
