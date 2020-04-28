import { FONTS, FONT_SIZES, FONT_WEIGHTS, COLORS } from '../assets/core'

export default {
  'title-largest': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[5],
    'line-height': '46px'
  },
  'title-large': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  'label-large': {
    color: COLORS.text,
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[4],
    'line-height': '30px'
  },
  'title-small': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[3],
    'line-height': '30px'
  },
  'text-large': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.lighter}`,
    'font-size': FONT_SIZES[2],
    'line-height': '42px'
  },
  'label-small-bold': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': `${FONT_WEIGHTS.bold}`,
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  'label-small': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[1],
    'line-height': '19px'
  },
  'label-button': {
    color: COLORS.text,
    'font-family': FONTS.complementary,
    'font-weight': `${FONT_WEIGHTS.black}`,
    'font-size': FONT_SIZES[0],
    'line-height': '14px',
    'text-transform': 'uppercase'
  },
  'text-small': {
    color: COLORS.text,
    'font-family': FONTS.primary,
    'font-weight': 'normal',
    'font-size': FONT_SIZES[0],
    'line-height': '20px'
  }
}
