import { BORDERS, COLORS, RADII } from '../assets/core'

const DEFAULT_DROPDOWN = {
  'background-color': COLORS.white,
  border: `${BORDERS[1]} ${COLORS.outline}`,
  'border-top-color': 'transparent',
  'border-bottom-left-radius': `${RADII[8]}px`,
  'border-bottom-right-radius': `${RADII[8]}px`,
  '&.dropdown-selected': {
    border: `${BORDERS[1]} ${COLORS.outline}`,
    'border-radius': `${RADII[8]}px`
  },
  '&.dropdown-active': {
    'border-radius': `${RADII[8]}px ${RADII[8]}px 0 0`
  },
  '.dropdown-item': {
    '.dropdown-text': {
      color: COLORS.text
    },
    '&.selected': {
      background: COLORS.accentFade,
      '.dropdown-text': {
        color: COLORS.text
      }
    },
    '&:hover': {
      background: COLORS.accent,
      '.dropdown-text': {
        color: COLORS.white
      }
    },
    ':nth-child(n + 2)': { 'border-top': `${BORDERS[1]} ${COLORS.outline}` }
  }
}
export default {
  default: DEFAULT_DROPDOWN,
  disabled: {
    ...DEFAULT_DROPDOWN,
    'background-color': COLORS.white,
    border: `${BORDERS[1]} ${COLORS.outline}`,
    opacity: 0.5,
    ':focus, :hover': { border: `${BORDERS[1]} ${COLORS.outline}` },
    '.dropdown-text': { color: '#1b202f' },
    '&.dropdown-selected': {
      ':focus, :hover': { border: `${BORDERS[1]} ${COLORS.outline}` },
      'border-radius': `${RADII[8]}px`
    },
    '&.dropdown-active': { 'border-color': COLORS.outline }
  },
  error: {
    ...DEFAULT_DROPDOWN,
    '&.dropdown-selected': {
      border: `${BORDERS[1]} ${COLORS.error}`,
      'border-radius': `${RADII[8]}px`
    },
    '&.dropdown-active': {
      'border-radius': `${RADII[8]}px ${RADII[8]}px 0 0`
    },
    '&.dropdown-active, &.dropdown-active:hover': {
      'border-color': COLORS.error
    }
  }
}
