import { FONTS, FONT_SIZES, FONT_WEIGHTS, COLORS } from '../assets/core'

export default {
  titleLargest: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[5],
    'line-height': '46px'
  },
  titleLarge: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  labelLarge: {
    color: COLORS.text,
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  titleSmall: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[3],
    'line-height': '30px'
  },
  textLarge: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[2],
    'line-height': '42px'
  },
  labelSmallBold: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.bold}`,
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  labelSmall: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  labelButton: {
    color: COLORS.text,
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.black}`,
    'font-size': FONT_SIZES[0],
    'line-height': '14px',
    'text-transform': 'uppercase'
  },
  textSmall: {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[0],
    'line-height': '20px'
  }
}
