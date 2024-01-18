import typography from '../Typography/variants'
import colors from '../assets/colors'
import { BORDERS, RADII, SPACE } from '../assets/core'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  backgroundColor: colors.white,
  border: `${BORDERS[1]} ${colors.outline}`,
  borderRadius: `${RADII[8]}px`,
  color: colors.dark,
  height: '40px',
  paddingLeft: `${SPACE[5]}px`,
  '&::placeholder': {
    color: colors.brandLight
  },
  '&:disabled, &:readonly': {
    color: colors.baseGray,
    borderColor: colors.baseGray,
    cursor: 'not-allowed'
  },
  '&:focus, &:hover': {
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
    '&:focus, &:hover': {
      border: `${BORDERS[1]} ${colors.baseGray}`,
      opacity: 0.5
    }
  },
  error: {
    ...DEFAULT_STYLE,
    border: `${BORDERS[1]} ${colors.error}`,
    color: colors.error,
    '&:focus, &:hover': {
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
