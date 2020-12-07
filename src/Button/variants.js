import sizes from '../assets/sizes'
import { BORDERS } from '../assets/core'
import colors from '../assets/colors'

const BUTTON_DEFAULT = {
  minHeight: sizes.buttonMinHeight,
  minWidth: sizes.buttonMinWidth,
  alignItems: 'center',
  border: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  label: {
    cursor: 'pointer',
    pointerEvents: 'none'
  },
  ':hover': {
    opacity: 0.75
  },
  ':active ': {
    transform: 'scale(0.965)'
  },
  ':focus': {
    opacity: 0.75,
    outlineStyle: 'none',
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
  backgroundColor: colors.brand,
  color: colors.white,
  ':hover': {
    backgroundColor: colors.brandDark
  },
  ':active': {
    backgroundColor: colors.brandDarkest
  },
  ':focus': {
    opacity: 1
  },
  ':disabled': {
    backgroundColor: colors.disabled,
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const PRIMARY_STYLE = {
  ...PRIMARY_DEFAULT
}
const LARGE_STYLE = {
  ...PRIMARY_DEFAULT,
  minWidth: sizes.largeButtonMinWidth
}

const OUTLINE_DEFAULT = {
  ...BUTTON_DEFAULT,
  color: colors.text,
  backgroundColor: 'transparent',
  border: `${BORDERS[1]}`
}
const OUTLINE_STYLE = {
  ...OUTLINE_DEFAULT,
  borderColor: colors.accent
}

const POSITIVE_STYLE = {
  ...BUTTON_DEFAULT,
  backgroundColor: colors.positive,
  color: 'white'
}
const LINK_DEFAULT = {
  ...BUTTON_DEFAULT,
  background: 'none',
  minWidth: 'max-content',
  height: 'auto',
  padding: 0,
  minHeight: 'max-content',
  ':hover': {
    color: colors.brandDark
  },
  ':active': {
    color: colors.brandDarkest
  },
  ':disabled': {
    color: colors.disabled,
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const LINK_STYLE = {
  ...LINK_DEFAULT,
  color: colors.brand
}
const LINK_POSITIVE_STYLE = {
  ...LINK_DEFAULT,
  color: colors.positive,
  ':hover': {
    opacity: 0.75
  },
  ':active': {
    color: colors.positive
  }
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
  primary: {
    color: colors.white,
    fontSize: '1'
  },
  large: {
    color: colors.white,
    fontSize: '2'
  },
  link: {
    color: colors.brand,
    fontSize: '1'
  }
}
const PRIMARY_SPINNER_VARIANT = {
  background: colors.brand,
  primary: colors.white
}
const LARGE_SPINNER_VARIANT = {
  ...PRIMARY_SPINNER_VARIANT
}
const LINK_SPINNER_VARIANT = {
  background: colors.white,
  primary: colors.brand
}
const POSITIVE_SPINNER_VARIANT = {
  background: colors.positive,
  primary: colors.white
}
const OUTLINE_SPINNER_VARIANT = {
  background: colors.transparent,
  primary: colors.white
}
export const spinnerVariants = {
  primary: PRIMARY_SPINNER_VARIANT,
  large: LARGE_SPINNER_VARIANT,
  link: LINK_SPINNER_VARIANT,
  outline: OUTLINE_SPINNER_VARIANT,
  outlineAlt: OUTLINE_SPINNER_VARIANT,
  positive: POSITIVE_SPINNER_VARIANT,
  linkSecondary: LINK_SPINNER_VARIANT,
  linkPositive: LINK_SPINNER_VARIANT
}
