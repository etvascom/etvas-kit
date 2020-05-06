import { BORDERS, COLORS, RADII, SPACE } from '../assets/core'

import typography from '../Typography/variants'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  'background-color': COLORS.white,
  border: `${BORDERS[1]} ${COLORS.outline}`,
  'border-radius': `${RADII[8]}px`,
  color: COLORS.dark,
  height: '40px',
  'padding-left': `${SPACE[5]}px`,
  '::placeholder': {
    color: COLORS.light
  },
  ':disabled, :readonly': {
    color: COLORS.gray,
    'border-color': COLORS.gray,
    cursor: 'not-allowed'
  },
  ':focus, :hover': {
    'border-color': COLORS.accent
  }
}

export default {
  default: DEFAULT_STYLE,
  disabled: {
    ...DEFAULT_STYLE,
    'box-shadow': 'none',
    color: '#979ca6',
    cursor: 'not-allowed',
    opacity: 0.5,
    ':focus, :hover': {
      border: `${BORDERS[1]} ${COLORS.gray}`,
      opacity: 0.5
    }
  },
  error: {
    ...DEFAULT_STYLE,
    border: `${BORDERS[1]} ${COLORS.error}`,
    color: COLORS.error
  },
  valid: {
    ...DEFAULT_STYLE,
    'background-color': COLORS.white,
    border: `${BORDERS[1]} ${COLORS.success}`,
    color: COLORS.success
  }
}
