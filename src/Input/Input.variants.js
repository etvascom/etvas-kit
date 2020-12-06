import { BORDERS, RADII } from '../assets/core'
import colors from '../assets/colors'
import sizes from '../assets/sizes'
import typography from '../Typography/variants'

const DEFAULT_DISABLED_STYLE = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
}

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  height: sizes.inputHeight,
  background: colors.backgroundLightGray,
  border: `${BORDERS[1]} ${colors.inputGray}`,
  boxSizing: 'border-box',
  color: colors.textInputActive,
  borderRadius: RADII[3],
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
    ...DEFAULT_DISABLED_STYLE,
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
    ...DEFAULT_DISABLED_STYLE,
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
    ...DEFAULT_DISABLED_STYLE,
    background: colors.backgroundGray,
    color: colors.textInputDisabled
  }
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE,
  ...DEFAULT_DISABLED_STYLE,
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
