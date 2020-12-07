import sizes from '../assets/sizes'
import { BORDERS } from '../assets/core'

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
  backgroundColor: 'brand',
  color: 'white',
  ':hover': {
    backgroundColor: 'brandHover'
  },
  ':active': {
    backgroundColor: 'brandPressed'
  },
  ':focus': {
    opacity: 1
  },
  ':disabled': {
    backgroundColor: 'brandDisabled',
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
  color: 'text',
  backgroundColor: 'transparent',
  border: `${BORDERS[1]}`,
}
const OUTLINE_STYLE = {
  ...OUTLINE_DEFAULT,
  borderColor: 'accent'
}
const OUTLINE_ALT_STYLE = {
  ...OUTLINE_DEFAULT,
  borderColor: 'text'
}
const POSITIVE_STYLE = {
  ...BUTTON_DEFAULT,
  backgroundColor: 'positive',
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
    color: 'brandHover'
  },
  ':active': {
    color: 'brandPressed'
  },
  ':disabled': {
    color: 'brandDisabled',
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}
const LINK_STYLE = {
  ...LINK_DEFAULT,
  color: 'brand'
}
const LINK_SECONDARY_STYLE = {
  ...LINK_DEFAULT,
  color: 'lighterText'
}
const LINK_POSITIVE_STYLE = {
  ...LINK_DEFAULT,
  color: 'positive'
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
    color: 'white',
    fontSize: '1'
  },
  large: {
    color: 'white',
    fontSize: '2'
  },
  link: {
    color: 'brand',
    fontSize: '1'
  }
}

export const spinnerVariants = {
  primary: {
    background: 'brand',
    primary: 'white'
  },
  large: {
    background: 'brand',
    primary: 'white'
  },
  outline: {
    background: 'white',
    primary: 'accent'
  },
  outlineAlt: {
    background: 'white',
    primary: 'text'
  },
  positive: {
    background: 'positive',
    primary: 'white'
  },
  link: {
    background: 'white',
    primary: 'brand'
  },
  linkSecondary: {
    background: 'white',
    primary: 'text'
  },
  linkPositive: {
    background: 'white',
    primary: 'positive'
  }
}
