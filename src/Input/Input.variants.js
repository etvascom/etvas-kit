import { BORDERS } from '../assets/core'
import sizes from '../assets/sizes'
import typography from '../Typography/variants'

const DEFAULT_DISABLED_STYLE = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
}

const DEFAULT_STYLE = {
  ...typography.labelSmall,
  height: sizes.inputHeight,
  background: 'backgroundLightGray',
  paddingLeft: 2,
  paddingRight: 10,
  borderSize: `${BORDERS[1]}`,
  borderColor: 'inputBorderGray',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: 3,
  boxSizing: 'border-box',
  color: 'textInputActive',
  width: '100%',
  outline: 'none',
  '::placeholder': {
    color: 'textInputPlaceholder'
  },
  ':hover': {
    borderColor: 'brandLight'
  },
  ':focus': {
    borderColor: 'brandLight'
  },
  ':disabled': {
    ...DEFAULT_DISABLED_STYLE,
    background: 'backgroundGray'
  }
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  borderSize: `${BORDERS[1]}`,
  borderColor: 'error',
  ':hover': {
    borderColor: 'error'
  },
  ':focus': {
    borderColor: 'error'
  },
  ':disabled': {
    ...DEFAULT_DISABLED_STYLE,
    backgroundColor: 'backgroundGray',
    color: 'textInputDisabled',
    borderColor: 'error'
  }
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  borderSize: `${BORDERS[1]}`,
  borderColor: 'warning',
  ':hover': {
    borderColor: 'warning'
  },
  ':focus': {
    borderColor: 'warning'
  },
  ':disabled': {
    ...DEFAULT_DISABLED_STYLE,
    background: 'backgroundGray',
    color: 'textInputDisabled'
  }
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE,
  ...DEFAULT_DISABLED_STYLE,
  backgroundColor: 'backgroundGray',
  borderColor: 'inputGray',
  color: 'textInputDisabled'
}

export default {
  default: DEFAULT_STYLE,
  disabled: DISABLED_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
}
