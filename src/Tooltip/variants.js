import {
  COLORS,
  RADII,
  SPACE,
  BORDERS,
  FONTS,
  FONT_SIZES
} from '../assets/core'

export default {
  footer: {
    'border-radius': RADII[3],
    border: `${BORDERS[1]} var(--etvas-lighterText-color)`,
    'background-color': 'var(--etvas-lighterText-color)',
    padding: `${SPACE[2]}px ${SPACE[3]}px`,
    '.tooltip-text': {
      padding: SPACE[0],
      color: COLORS.white,
      'font-family': FONTS.primary,
      'font-weight': 'normal',
      'font-size': FONT_SIZES[0],
      'line-height': '20px'
    },
    '&::after': {
      'border-color': 'var(--etvas-lighterText-color)',
      'background-color': 'var(--etvas-lighterText-color)'
    }
  }
}
