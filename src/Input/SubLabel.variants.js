import colors from '../assets/colors'
import { FONTS, LINE_HEIGHTS, FONT_SIZES } from '../assets/core'

const DEFAULT_STYLE = {
  color: colors.textDefault,
  fontSize: FONT_SIZES[0],
  lineHeight: LINE_HEIGHTS.inputLabel,
  fontFamily: FONTS.primary
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  color: colors.error
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
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
