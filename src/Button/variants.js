import sizes from '../assets/sizes'
import { BORDERS } from '../assets/core'

const BUTTON_DEFAULT = {
  height: sizes.buttonHeight,
  minWidth: sizes.buttonMinWidth,
  paddingLeft: sizes.spacingNormal,
  paddingRight: sizes.spacingNormal,
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
  ':focus': {
    opacity: 0.75,
    outlineStyle: 'none',
    userSelect: 'none',
    outlineColor: 'transparent'
  },
  ':disabled': {
    opacity: 0.3,
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const PRIMARY_DEFAULT = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'brand',
  color: 'white',
  ':not([disabled])': {
    ':hover': { backgroundColor: 'brandDark' },
    ':active': { backgroundColor: 'brandDarkest' }
  },
  ':hover': { opacity: 1 },
  ':disabled': {
    backgroundColor: 'disabled',
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const PRIMARY_STYLE = { ...PRIMARY_DEFAULT }
const LARGE_STYLE = {
  ...PRIMARY_DEFAULT,
  paddingLeft: sizes.spacingLarge,
  paddingRight: sizes.spacingLarge,
  height: sizes.largeButtonHeight
}
const POSITIVE_STYLE = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'positive',
  color: 'white'
}
const LINK_DEFAULT = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'transparent',
  height: 'auto',
  width: 'auto',
  minWidth: 'auto',
  padding: 0,
  minHeight: 'max-content',
  ':not([disabled])': {
    ':hover': { color: 'brandDark' },
    ':active': { color: 'brandDarkest' }
  },
  ':hover': { opacity: 1 },
  ':disabled': {
    color: 'disabled',
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const LINK_STYLE = { ...LINK_DEFAULT, color: 'brand' }
const LINK_POSITIVE_STYLE = {
  ...LINK_DEFAULT,
  color: 'positive',
  ':not([disabled])': {
    ':hover': { opacity: 0.75, color: 'positive' },
    ':active': { color: 'positive' }
  }
}
export default {
  primary: PRIMARY_STYLE,
  large: LARGE_STYLE,
  link: LINK_STYLE,
  positive: POSITIVE_STYLE,
  linkSecondary: LINK_STYLE,
  linkPositive: LINK_POSITIVE_STYLE
}
