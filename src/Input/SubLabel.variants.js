import { FONTS, LINE_HEIGHTS, FONT_SIZES } from '../assets/core'

const DEFAULT_STYLE = {
  color: 'textDefault',
  fontSize: FONT_SIZES[0],
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
