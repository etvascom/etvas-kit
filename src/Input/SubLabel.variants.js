import colors from '../assets/colors'

const DEFAULT_STYLE = {
  color: colors.textDefault
}

const ERROR_STYLE = {
  color: colors.error
}

const WARNING_STYLE = {
  color: colors.warning
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

export default {
  default: DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
}
