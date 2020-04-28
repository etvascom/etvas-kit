import {
  BORDERS,
  COLORS,
  FONTS,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  TEXT_STYLES
} from '../assets/core'

const labelStyle = {
  'font-family': FONTS.complementary,
  'font-size': FONT_SIZES[0],
  'font-weight': `${FONT_WEIGHTS.black}`,
  'line-height': LINE_HEIGHTS.buttonLabel,
  ...TEXT_STYLES.caps
}
const labelStyleAlt = {
  'font-family': FONTS.primary,
  'font-size': FONT_SIZES[0],
  'font-weight': `${FONT_WEIGHTS.normal}`,
  ...TEXT_STYLES.capitalize
}

export default {
  primary: {
    label: {
      ...labelStyle,
      color: COLORS.white
    },
    'background-color': COLORS.accent,
    color: '#ffffff',
    'border-radius': `${RADII[8]}px`,
    ':focus, :hover': { 'background-color': COLORS.accent, opacity: 0.75 },
    ':disabled': {
      'background-color': COLORS.accentFade,
      cursor: 'not-allowed',
      label: {
        ...labelStyle,
        color: COLORS.error
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
    'border-color': COLORS.accent,
    'border-radius': `${RADII[8]}px`,
    ':focus, :hover': {
      'background-color': 'transparent',
      'border-color': COLORS.accent,
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
  'outline-alt': {
    label: {
      ...labelStyleAlt,
      color: COLORS.text
    },
    'background-color': 'transparent',
    border: `${BORDERS[1]} ${COLORS.text}`,
    'border-radius': `${RADII[8]}px`,
    ':focus, :hover': {
      'background-color': 'transparent',
      'border-color': COLORS.text,
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
