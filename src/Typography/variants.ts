import {
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS
} from '../assets/core'

export const typographyVariants = {
  base12Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[0],
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACINGS.base
  },
  base14Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[1],
    lineHeight: LINE_HEIGHTS.paragraph,
    letterSpacing: LETTER_SPACINGS.normal
  },
  base16Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[2],
    lineHeight: LINE_HEIGHTS.largeParagraph,
    letterSpacing: LETTER_SPACINGS.base
  },
  title20Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[3],
    lineHeight: LINE_HEIGHTS.title,
    letterSpacing: LETTER_SPACINGS.tight
  },
  title24Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[4],
    lineHeight: LINE_HEIGHTS.title,
    letterSpacing: LETTER_SPACINGS.tighter
  },
  title32Light: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.lighter,
    fontSize: FONT_SIZES[5],
    lineHeight: LINE_HEIGHTS.largeTitle,
    letterSpacing: LETTER_SPACINGS.tightest
  },
  base12Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[0],
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACINGS.base
  },
  base14Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[1],
    lineHeight: LINE_HEIGHTS.largeBase,
    letterSpacing: LETTER_SPACINGS.base
  },
  base16Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[2],
    lineHeight: LINE_HEIGHTS.paragraph,
    letterSpacing: LETTER_SPACINGS.base
  },
  title20Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[3],
    lineHeight: LINE_HEIGHTS.title,
    letterSpacing: LETTER_SPACINGS.tight
  },
  title24Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[4],
    lineHeight: LINE_HEIGHTS.title,
    letterSpacing: LETTER_SPACINGS.tighter
  },
  title32Bold: {
    fontFamily: 'primary',
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES[5],
    lineHeight: LINE_HEIGHTS.largeTitle,
    letterSpacing: LETTER_SPACINGS.tightest
  }
}

const variants = {
  default: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 1,
    lineHeight: '20px',
    textTransform: 'unset'
  },
  titleLargest: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 7,
    textTransform: 'unset',
    lineHeight: '56px',
    letterSpacing: '-1.6px'
  },
  titleLarge: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 6,
    textTransform: 'unset',
    lineHeight: '40px',
    letterSpacing: '-1.2px'
  },
  labelLarge: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 5,
    textTransform: 'unset',
    lineHeight: '32px',
    letterSpacing: '-0.4px'
  },
  titleSmall: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 4,
    textTransform: 'unset',
    lineHeight: '32px',
    letterSpacing: '-0.2px'
  },
  textLarge: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 3,
    textTransform: 'unset',
    lineHeight: '24px'
  },
  textSmall: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 2,
    textTransform: 'unset',
    lineHeight: '20px',
    letterSpacing: '0px'
  },
  textSmallest: {
    fontFamily: 'primary',
    fontWeight: 'lighter',
    fontSize: 0,
    textTransform: 'unset',
    lineHeight: '16px'
  },
  inputLabel: {
    color: 'textLabelDefault',
    fontFamily: 'primary',
    fontWeight: '500',
    fontSize: 1,
    letterSpacing: '0.3px',
    lineHeight: '16px',
    marginBottom: '4px'
  },
  labelSmallBold: {
    fontFamily: 'primary',
    fontWeight: 'bold',
    fontSize: 2,
    textTransform: 'unset',
    lineHeight: '20px'
  },
  labelSmall: {
    fontFamily: 'primary',
    fontWeight: '300',
    fontSize: 2,
    textTransform: 'unset',
    lineHeight: '20px'
  },
  labelButton: {
    fontFamily: 'primary',
    fontWeight: '800',
    fontSize: 1,
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.4px'
  },
  labelLargeButton: {
    fontFamily: 'primary',
    fontWeight: '800',
    fontSize: 2,
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.2px'
  },
  ...typographyVariants
}

export default variants
export type TypographyVariants = keyof typeof variants
