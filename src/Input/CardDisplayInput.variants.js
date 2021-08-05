import sizes from '../assets/sizes'
import typography from '../Typography/variants'

const DEFAULT_STYLE = {
  ...typography.inputLabel,
  height: sizes.inputHeight,
  background: 'backgroundLightGray',
  borderSize: 1,
  borderColor: 'inputBorderGray',
  boxSizing: 'border-box',
  color: 'textInputActive',
  borderRadius: 3,
  cursor: 'default',
  '::placeholder': {
    color: 'textInputPlaceholder'
  },
  ':disabled': {
    background: 'backgroundGray'
  }
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE,
  pointerEvents: 'none',
  backgroundColor: 'backgroundGray',
  borderColor: 'inputGray',
  color: 'textInputDisabled'
}

export default {
  default: DEFAULT_STYLE,
  disabled: DISABLED_STYLE
}
