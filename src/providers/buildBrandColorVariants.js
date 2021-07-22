import { hslToHex, hexToHsl } from '../utils'

const changeLightnessToHsl = ([h, s, l], percentage) => [h, s, l + percentage]

const changePerceivedLightnessToHex = (hex, percentage) => {
  const hsl = hexToHsl(hex)
  let ret

  if (hsl[2] + percentage > 100) {
    percentage = 100 - hsl[2]
  }

  if (hsl[2] + percentage < 0) {
    percentage = hsl[2] - 100
  }

  if (percentage < 0) {
    if (hsl[2] < 60) {
      ret = changeLightnessToHsl(hsl, percentage)
    } else {
      ret = changeLightnessToHsl(hsl, -percentage)
    }
  } else {
    if (hsl[2] < 60) {
      ret = changeLightnessToHsl(hsl, percentage)
    } else {
      ret = changeLightnessToHsl(hsl, -percentage)
    }
  }

  return hslToHex(ret)
}

const returnIfNotExists = (update, fallback) => (update ? update : fallback)

export const buildBrandColorVariants = (brandColor, existingColors) => {
  const brandColorLight = changePerceivedLightnessToHex(brandColor, 22)
  const brandColorLighter = changePerceivedLightnessToHex(brandColor, 50)
  const brandColorLightest = changePerceivedLightnessToHex(brandColor, 53)

  const brandColorDark = changePerceivedLightnessToHex(brandColor, -15)
  const brandColorDarkest = changePerceivedLightnessToHex(brandColor, -30)

  return {
    brandColorLight: returnIfNotExists(
      existingColors.brandColorLight,
      brandColorLight
    ),
    brandColorLighter: returnIfNotExists(
      existingColors.brandColorLighter,
      brandColorLighter
    ),
    brandColorLightest: returnIfNotExists(
      existingColors.brandColorLightest,
      brandColorLightest
    ),
    brandColorDark: returnIfNotExists(
      existingColors.brandColorDark,
      brandColorDark
    ),
    brandColorDarkest: returnIfNotExists(
      existingColors.brandColorDarkest,
      brandColorDarkest
    )
  }
}
