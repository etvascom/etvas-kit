import { BORDERS } from '../assets/core'
import colors from '../assets/colors'
import typography from '../Typography/variants'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  height: '40px',
  background: colors.backgroundLightGray,
  border: `${BORDERS[1]} ${colors.inputGray}`,
  boxSizing: 'border-box',
  color: colors.textInputActive,
  borderRadius: '3px',
  '::placeholder': {
    color: colors.textInputPlaceholder
  },
  ':hover': {
    borderColor: colors.brandLight
  },
  ':focus': {
    borderColor: colors.brandLight
  },
  ':disabled': {
    background: colors.backgroundGray,
    color: colors.textInputDisabled,
    ':hover, :focus': {
      borderColor: colors.inputGray
    }
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
    color: colors.textInputDisabled,
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
    background: colors.backgroundGray,
    color: colors.textInputDisabled
  }
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE,
  background: colors.backgroundGray,
  borderColor: colors.inputGray,
  color: colors.textInputDisabled
}

export default {
  default: DEFAULT_STYLE,
  disabled: DISABLED_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
}
