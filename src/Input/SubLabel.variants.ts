import { typographyVariants } from '../Typography/variants'

const DEFAULT_STYLE = {
  color: 'textDefault',
  ...typographyVariants.base12Light
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  color: 'statusError'
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  color: 'statusWarning'
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
