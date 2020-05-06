import { BORDERS, COLORS, RADII, SHADOWS } from '../assets/core'

export default {
  content: {
    'background-color': COLORS.white,
    'border-radius': `${RADII[2]}px ${RADII[8]}px ${RADII[8]}px ${RADII[2]}px`,
    'box-shadow': SHADOWS.etvasCard
  },
  popup: {
    'background-color': COLORS.white,
    // FIXME: ask the designer to pick a colour from palette
    border: `${BORDERS[1]} #D4DEE8`,
    'box-shadow': SHADOWS.etvasCard,
    'border-radius': `${RADII[2]}px`
  }
}
