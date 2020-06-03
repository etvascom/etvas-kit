import { BORDERS, FONTS, FONT_WEIGHTS, RADII } from '../assets/core'

import colors from '../assets/colors'
import typography from '../Typography/variants'

// #region button labels
const labelStyle = typography.labelButton
const labelStyleAlt = {
  ...labelStyle,
  color: 'inherit',
  'font-family': FONTS.primary,
  'font-weight': `${FONT_WEIGHTS.bold}`
}
// #endregion

const linkStyles = color => ({
  label: {
    ...labelStyle,
    padding: 0,
    color: color
  },
  background: 'none',
  minWidth: 'max-content',
  height: 'auto',
  padding: 0,
  minHeight: 'max-content',
  ':focus, :hover': {
    opacity: 0.75
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: '.3'
  }
})

export default {
  primary: {
    label: labelStyle,
    backgroundColor: colors.accent,
    color: colors.white,
    borderRadius: `${RADII[8]}px`,
    ':focus': {
      backgroundColor: colors.accent,
      opacity: 0.75
    },
    ':hover': {
      backgroundColor: colors.accent,
      opacity: 0.75
    },
    ':disabled': {
      opacity: 1,
      backgroundColor: colors.accentFade,
      cursor: 'not-allowed',
      color: colors.white,
      transform: 'scale(1)',
      ':hover': {
        backgroundColor: colors.accentFade
      }
    }
  },
  outline: {
    label: labelStyle,
    color: colors.text,
    backgroundColor: 'transparent',
    border: `${BORDERS[1]} ${colors.accent}`,
    borderRadius: `${RADII[8]}px`,
    ':focus': {
      backgroundColor: 'transparent',
      border: `${BORDERS[1]} ${colors.accent}`,
      opacity: 0.75
    },
    ':hover': {
      backgroundColor: 'transparent',
      border: `${BORDERS[1]} ${colors.accent}`,
      opacity: 0.75
    },
    ':disabled': {
      opacity: 1,
      border: `${BORDERS[1]} ${colors.accentFade}`,
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: colors.disabled,
      transform: 'scale(1)',
      ':hover': {
        border: `${BORDERS[1]} ${colors.accentFade}`
      }
    }
  },
  outlineAlt: {
    label: labelStyleAlt,
    color: colors.text,
    backgroundColor: 'transparent',
    border: `${BORDERS[1]} ${colors.text}`,
    borderRadius: `${RADII[8]}px`,
    ':focus': {
      backgroundColor: 'transparent',
      border: `${BORDERS[1]} ${colors.text}`,
      opacity: 0.75
    },
    ':hover': {
      backgroundColor: 'transparent',
      border: `${BORDERS[1]} ${colors.text}`,
      opacity: 0.75
    },
    ':disabled': {
      opacity: 1,
      border: `${BORDERS[1]} ${colors.disabled}`,
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
      color: colors.disabled,
      transform: 'scale(1)'
    }
  },
  successAction: {
    label: labelStyle,
    backgroundColor: colors.successAction,
    color: colors.white,
    borderRadius: `${RADII[8]}px`,
    ':focus': {
      backgroundColor: colors.successAction,
      opacity: 0.75
    },
    ':hover': {
      backgroundColor: colors.successAction,
      opacity: 0.75
    },
    ':disabled': {
      opacity: 1,
      backgroundColor: colors.successActionFade,
      cursor: 'not-allowed',
      color: colors.white,
      transform: 'scale(1)',
      ':hover': {
        backgroundColor: colors.successActionFade
      }
    }
  },
  link: linkStyles(colors.accent),
  linkSecondary: linkStyles(colors.lighterText),
  linkSuccessAction: linkStyles(colors.successAction)
}
