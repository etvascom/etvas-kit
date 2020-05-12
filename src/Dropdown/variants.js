import { BORDERS, RADII } from '../assets/core'
import colors from '../assets/colors'

const DEFAULT_DROPDOWN = {
  'background-color': colors.white,
  border: `${BORDERS[1]} ${colors.outline}`,
  'border-top-color': 'transparent',
  'border-bottom-left-radius': `${RADII[8]}px`,
  'border-bottom-right-radius': `${RADII[8]}px`,
  '&.dropdown-selected': {
    border: `${BORDERS[1]} ${colors.outline}`,
    'border-radius': `${RADII[8]}px`
  },
  '&.dropdown-active': {
    'border-radius': `${RADII[8]}px ${RADII[8]}px 0 0`
  },
  '.dropdown-item': {
    '.dropdown-text': {
      color: colors.text
    },
    '&.selected': {
      background: colors.accentFade,
      '.dropdown-text': {
        color: colors.text
      }
    },
    '&:hover': {
      background: colors.accent,
      '.dropdown-text': {
        color: colors.white
      }
    },
    ':nth-child(n + 2)': { 'border-top': `${BORDERS[1]} ${colors.outline}` }
  }
}
export default {
  default: DEFAULT_DROPDOWN,
  disabled: {
    ...DEFAULT_DROPDOWN,
    'background-color': colors.white,
    border: `${BORDERS[1]} ${colors.outline}`,
    opacity: 0.5,
    ':focus, :hover': { border: `${BORDERS[1]} ${colors.outline}` },
    '.dropdown-text': { color: '#1b202f' },
    '&.dropdown-selected': {
      ':focus, :hover': { border: `${BORDERS[1]} ${colors.outline}` },
      'border-radius': `${RADII[8]}px`
    },
    '&.dropdown-active': { 'border-color': colors.outline }
  },
  error: {
    ...DEFAULT_DROPDOWN,
    '&.dropdown-selected': {
      border: `${BORDERS[1]} ${colors.error}`,
      'border-radius': `${RADII[8]}px`
    },
    '&.dropdown-active': {
      'border-radius': `${RADII[8]}px ${RADII[8]}px 0 0`
    },
    '&.dropdown-active, &.dropdown-active:hover': {
      'border-color': colors.error
    }
  }
}
