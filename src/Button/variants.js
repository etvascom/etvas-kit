import { BORDERS, COLORS, FONTS, FONT_WEIGHTS, RADII } from '../assets/core'

import typography from '../Typography/variants'

// #region button labels
const labelStyle = typography.labelButton
const labelStyleAlt = {
  ...labelStyle,
  'font-family': FONTS.primary,
  'font-weight': `${FONT_WEIGHTS.bold}`
}
// #endregion

export default {
  primary: {
    label: {
      ...labelStyle,
      color: COLORS.white
    },
    'background-color': COLORS.accent,
    color: COLORS.white,
    'border-radius': `${RADII[8]}px`,
    ':focus, :hover': { 'background-color': COLORS.accent, opacity: 0.75 },
    ':disabled': {
      'background-color': COLORS.accentFade,
      cursor: 'not-allowed',
      label: {
        ...labelStyle,
        color: COLORS.white
      },
      transform: 'scale(1)',
      ':hover': {
        'background-color': COLORS.accentFade,
        opacity: 1
      }
    }
  },
  outline: {
    label: {
      ...labelStyle,
      color: COLORS.text
    },
    'background-color': 'transparent',
    border: `${BORDERS[1]} ${COLORS.accent}`,
    'border-radius': `${RADII[8]}px`,
    color: COLORS.text,
    ':focus, :hover': {
      'background-color': 'transparent',
      border: `${BORDERS[1]} ${COLORS.accent}`,
      opacity: 0.75
    },
    ':disabled': {
      border: `${BORDERS[1]} ${COLORS.accent}`,
      'background-color': 'transparent',
      cursor: 'not-allowed',
      label: {
        ...labelStyle,
        color: COLORS.disabled
      },
      ':hover': {
        opacity: 1
      },
      transform: 'scale(1)'
    }
  },
  outlineAlt: {
    label: {
      ...labelStyleAlt,
      color: COLORS.text
    },
    'background-color': 'transparent',
    border: `${BORDERS[1]} ${COLORS.text}`,
    'border-radius': `${RADII[8]}px`,
    ':focus, :hover': {
      'background-color': 'transparent',
      border: `${BORDERS[1]} ${COLORS.text}`,
      opacity: 0.75
    },
    ':disabled': {
      border: `${BORDERS[1]} ${COLORS.disabled}`,
      'background-color': 'transparent',
      cursor: 'not-allowed',
      label: {
        ...labelStyleAlt,
        color: COLORS.disabled
      },
      ':hover': {
        opacity: 1
      },
      transform: 'scale(1)'
    }
  },
  link: {
    label: {
      ...labelStyle,
      color: COLORS.accent
    },
    'min-width': 'fit-content',
    ':focus, :hover': {
      opacity: 0.75
    },
    ':disabled': {
      cursor: 'not-allowed',
      label: {
        ...labelStyle,
        color: COLORS.accentFade
      },
      ':hover': {
        opacity: 1
      }
    }
  }
}
