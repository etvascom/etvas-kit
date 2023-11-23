import colors from '../assets/colors'
import { BORDERS, RADII, SPACE } from '../assets/core'

export default {
  radioLabel: ({ disabled, variant }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: variant === 'normal' ? 'top' : 'center',
    paddingTop: variant === 'normal' && SPACE[2],
    marginRight: SPACE[6],
    minHeight: '40px',
    cursor: 'pointer',
    userSelect: 'none',
    opacity: disabled ? '0.5' : '1',
    '> input[type="radio"]': {
      display: variant === 'normal' ? 'none' : 'unset'
    },
    '&:hover': {
      '> div': {
        borderColor: disabled ? colors.outline : colors.accent
      }
    }
  }),
  roundedBox: {
    width: '22px', // 1.4em
    height: '22px',
    flex: '0 0 22px',
    display: 'block',
    position: 'relative',
    marginRight: '.5em',
    marginTop: '-2px',
    borderRadius: RADII.round,
    border: `${BORDERS[1]} ${colors.outline}`,
    backgroundColor: colors.white,
    cursor: 'pointer',
    '> span': {
      display: 'block',
      position: 'absolute',
      left: '25%',
      top: '25%',
      bottom: '25%',
      right: '25%',
      borderRadius: RADII.round,
      backgroundColor: colors.accent
    }
  },
  checkmarkInput: {
    borderRadius: '50%',
    appearance: 'none',
    height: '20px',
    width: '20px',
    margin: '0 .5rem 0 0',
    transition: 'all 0.15s ease-out 0s',
    border: `1px solid ${colors.accent}`,
    color: colors.white,
    cursor: 'pointer',
    outline: 'none',
    '&:checked': {
      background: colors.accent,
      '&::before': {
        height: '20px',
        width: '20px',
        content: `url(
          'data:image/svg+xml;charset=UTF-8, <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0819 0.363281C9.8272 0.363281 9.58582 0.462114 9.40336 0.640772L4.65181 5.3144L2.1886 2.93007C2.0071 2.75426 1.76857 2.65638 1.51483 2.65638C1.2516 2.65638 1.00452 2.75996 0.819207 2.95003C0.638648 3.13534 0.541717 3.38052 0.545518 3.639C0.549319 3.89844 0.654804 4.14077 0.840114 4.32037L3.98184 7.36232C4.16335 7.53908 4.40283 7.63601 4.65656 7.63601C4.91125 7.63601 5.15167 7.53908 5.33603 7.35852L10.7604 2.02252C10.9457 1.84196 11.0484 1.59964 11.0503 1.34115C11.0531 1.08172 10.9543 0.837486 10.7718 0.651225C10.5884 0.464964 10.3432 0.363281 10.0819 0.363281Z" fill="white"/></svg>'
        )`,
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '20px'
      }
    }
  }
}
