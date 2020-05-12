import { FONTS, FONT_SIZES, FONT_WEIGHTS } from '../assets/core'
import colors from '../assets/colors'

export default {
  default: {
    color: colors.text,
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[0],
    'line-height': '20px'
  },
  titleLargest: {
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[5],
    'line-height': '46px'
  },
  titleLarge: {
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  labelLarge: {
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  titleSmall: {
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[3],
    'line-height': '30px'
  },
  textLarge: {
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[2],
    'line-height': '42px'
  },
  inputLabel: {
    'font-family': FONTS.primary,
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  labelSmallBold: {
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.bold}`,
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  labelSmall: {
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  labelButton: {
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.black}`,
    'font-size': FONT_SIZES[0],
    'line-height': '14px',
    'text-transform': 'uppercase'
  },
  textSmall: {
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[0],
    'line-height': '20px'
  }
}
