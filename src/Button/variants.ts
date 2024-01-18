import sizes from '../assets/sizes'

const BUTTON_DEFAULT = {
  height: sizes.buttonHeight,
  minWidth: sizes.buttonMinWidth,
  paddingLeft: sizes.spacingNormal,
  paddingRight: sizes.spacingNormal,
  alignItems: 'center',
  border: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  label: { cursor: 'pointer', pointerEvents: 'none' },
  '&:hover': { opacity: 0.75 },
  '&:active ': { transform: 'scale(0.965)' },
  '&:focus': {
    opacity: 0.75,
    outlineStyle: 'none',
    userSelect: 'none',
    outlineColor: 'transparent'
  },
  '&:disabled': {
    opacity: 0.3,
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
}

const PRIMARY_DEFAULT = ({ colorVariants }: ColorVariantsProps) => ({
  ...BUTTON_DEFAULT,
  backgroundColor: colorVariants.buttonColor ?? 'accent',
  color: 'white',
  '&:not([disabled])': {
    '&:hover': {
      backgroundColor: colorVariants.buttonColorDark ?? 'accentColorDark'
    },
    '&:active': {
      backgroundColor: colorVariants.buttonColorDarkest ?? 'accentColorDarkest'
    }
  },
  '&:hover': { opacity: 1 },
  '&:disabled': {
    backgroundColor: 'disabled',
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
})

const PRIMARY_STYLE = (props: ColorVariantsProps) => ({
  ...PRIMARY_DEFAULT(props)
})

const LARGE_STYLE = (props: ColorVariantsProps) => ({
  ...PRIMARY_DEFAULT(props),
  paddingLeft: sizes.spacingLarge,
  paddingRight: sizes.spacingLarge,
  height: sizes.largeButtonHeight
})

const POSITIVE_STYLE = ({ colorVariants }: ColorVariantsProps) => ({
  ...BUTTON_DEFAULT,
  backgroundColor: colorVariants.buttonColor ?? 'statusSuccess',
  color: 'white'
})

const LINK_DEFAULT = ({ colorVariants }: ColorVariantsProps) => ({
  ...BUTTON_DEFAULT,
  backgroundColor: 'transparent',
  height: 'auto',
  width: 'auto',
  minWidth: 'auto',
  padding: 0,
  minHeight: 'max-content',
  '&:not([disabled])': {
    '&:hover': { color: colorVariants.buttonColorDark ?? 'accentColorDark' },
    '&:active': {
      color: colorVariants.buttonColorDarkest ?? 'accentColorDarkest'
    }
  },
  '&:hover': { opacity: 1 },
  '&:disabled': {
    color: 'disabled',
    transform: 'scale(1)',
    cursor: 'not-allowed'
  }
})

const LINK_STYLE = (props: ColorVariantsProps) => ({
  ...LINK_DEFAULT(props),
  color: props.colorVariants.buttonColor ?? 'accent'
})

const LINK_POSITIVE_STYLE = (props: ColorVariantsProps) => ({
  ...LINK_DEFAULT(props),
  color: props.colorVariants.buttonColor ?? 'statusSuccess',
  '&:not([disabled])': {
    '&:hover': {
      opacity: 0.75,
      color: props.colorVariants.buttonColor ?? 'statusSuccess'
    },
    '&:active': { color: props.colorVariants.buttonColor ?? 'statusSuccess' }
  }
})

interface ColorVariantsProps {
  colorVariants: any
}

export default (props: ColorVariantsProps) => ({
  primary: PRIMARY_STYLE(props),
  large: LARGE_STYLE(props),
  link: LINK_STYLE(props),
  positive: POSITIVE_STYLE(props),
  linkSecondary: LINK_STYLE(props),
  linkPositive: LINK_POSITIVE_STYLE(props)
})
