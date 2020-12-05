import { BORDERS } from '../assets/core'
import colors from '../assets/colors'
import typography from '../Typography/variants'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  height: '40px',
  background: colors.backgroundLightGray,
  border: `${BORDERS[1]} ${colors.inputGray}`,
  boxSizing: 'border-box',
  borderRadius: '3px',
  ':hover': {
    borderColor: colors.brandLight
  },
  ':focus': {
    borderColor: colors.brandLight
  },
  ':disabled': {
    background: colors.backgroundGray
  }
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  border: `${BORDERS[1]} ${colors.error}`,
  ':hover': {
    borderColor: colors.error
  },
  ':focus': {
    borderColor: colors.error
  },
  ':disabled': {
    background: colors.backgroundGray,
    borderColor: colors.error
  }
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  border: `${BORDERS[1]} ${colors.warning}`,
  ':hover': {
    borderColor: colors.warning
  },
  ':focus': {
    borderColor: colors.warning
  },
  ':disabled': {
    background: colors.backgroundGray
  }
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
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
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
}
