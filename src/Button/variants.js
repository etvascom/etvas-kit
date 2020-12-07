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
const PRIMARY_LARGE_STYLE = {
  ...PRIMARY_DEFAULT,
  minWidth: sizes.largeButtonMinWidth
}

const OUTLINE_DEFAULT = {
  ...BUTTON_DEFAULT,
  color: colors.text,
  backgroundColor: 'transparent',
  border: `${BORDERS[1]}`,
}
const OUTLINE_STYLE = {
  ...OUTLINE_DEFAULT,
  borderColor: colors.accent
}
const OUTLINE_ALT_STYLE = {
  ...OUTLINE_DEFAULT,
  borderColor: colors.text
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
    color: colors.brand
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
const LINK_SECONDARY_STYLE = {
  ...LINK_DEFAULT,
  color: colors.lighterText
}
const LINK_POSITIVE_STYLE = {
  ...LINK_DEFAULT,
  color: colors.positive
}
export default {
  primary: PRIMARY_STYLE,
  large: PRIMARY_LARGE_STYLE,
  link: LINK_STYLE,
  outline: OUTLINE_STYLE,
  outlineAlt: OUTLINE_ALT_STYLE,
  positive: POSITIVE_STYLE,
  linkSecondary: LINK_SECONDARY_STYLE,
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

export const spinnerVariants = {
  primary: {
    background: colors.brand,
    primary: colors.white
  },
  large: {
    background: colors.brand,
    primary: colors.white
  },
  outline: {
    background: colors.white,
    primary: colors.accent
  },
  outlineAlt: {
    background: colors.white,
    primary: colors.text
  },
  positive: {
    background: colors.positive,
    primary: colors.white
  },
  link: {
    background: colors.white,
    primary: colors.brand
  },
  linkSecondary: {
    background: colors.white,
    primary: colors.text
  },
  linkPositive: {
    background: colors.white,
    primary: colors.positive
  }
}
