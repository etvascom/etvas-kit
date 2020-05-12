import { BORDERS, RADII, SPACE } from '../assets/core'
import colors from '../assets/colors'
import typography from '../Typography/variants'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  backgroundColor: colors.white,
  border: `${BORDERS[1]} ${colors.outline}`,
  borderRadius: `${RADII[8]}px`,
  color: colors.dark,
  height: '40px',
  paddingLeft: `${SPACE[5]}px`,
  '::placeholder': {
    color: colors.light
  },
  ':disabled, :readonly': {
    color: colors.gray,
    borderColor: colors.gray,
    cursor: 'not-allowed'
  },
  ':focus, :hover': {
    borderColor: colors.accent
  }
}

export default {
  default: DEFAULT_STYLE,
  disabled: {
    ...DEFAULT_STYLE,
    boxShadow: 'none',
    color: '#979ca6',
    cursor: 'not-allowed',
    opacity: 0.5,
    ':focus, :hover': {
      border: `${BORDERS[1]} ${colors.gray}`,
      opacity: 0.5
    }
  },
  error: {
    ...DEFAULT_STYLE,
    border: `${BORDERS[1]} ${colors.error}`,
    color: colors.error,
    ':focus, :hover': {
      border: `${BORDERS[1]} ${colors.accent}`
    }
  },
  valid: {
    ...DEFAULT_STYLE,
    backgroundColor: colors.white,
    border: `${BORDERS[1]} ${colors.success}`,
    color: colors.success
  }
}
