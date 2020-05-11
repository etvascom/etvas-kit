import { COLORS, RADII, SPACE, BORDERS } from '../assets/core'

import { typography } from '../Typography'

export default {
  footer: {
    'border-radius': RADII[3],
    border: `${BORDERS[1]} ${COLORS.lighterText}`,
    'background-color': COLORS.lighterText,
    padding: `${SPACE[2]}px ${SPACE[3]}px`,
    '.tooltip-text': {
      ...typography.textSmall,
      color: COLORS.white
    },
    '&::after': {
      'border-color': COLORS.lighterText,
      'background-color': COLORS.lighterText
    }
  }
}
