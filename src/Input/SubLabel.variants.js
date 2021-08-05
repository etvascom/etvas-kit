import { FONTS, LINE_HEIGHTS } from '../assets/core'

const DEFAULT_STYLE = {
  color: 'textDefault',
  fontSize: '11px',
  fontWeight: '300',
  lineHeight: LINE_HEIGHTS.inputLabel,
  fontFamily: FONTS.primary
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  color: 'error'
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  color: 'warning'
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE
}

export default {
  default: DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE,
  disabled: DISABLED_STYLE
}
