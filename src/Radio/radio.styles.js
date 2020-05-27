import colors from '../assets/colors'
import { BORDERS, RADII, SPACE } from '../assets/core'

export default {
  radioLabel: ({ disabled }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'top',
    paddingTop: SPACE[2],
    marginRight: SPACE[6],
    minHeight: '40px',
    cursor: 'pointer',
    userSelect: 'none',
    opacity: disabled ? '0.5' : '1',
    '> input[type="radio"]': {
      display: 'none'
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
  }
}
