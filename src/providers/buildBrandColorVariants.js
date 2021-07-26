import { changePerceivedLightnessToHex } from '../utils'

export const buildBrandColorVariants = (brandColor, existingColors) => {
  const colorVariants = {
    brandColorLight: 10,
    brandColorLighter: 20,
    brandColorLightest: 30,
    brandColorDark: -10,
    brandColorDarker: -20
  }

  return Object.keys(colorVariants).reduce((colors, key) => {
    if (!existingColors[key]) {
      colors[key] = changePerceivedLightnessToHex(
        brandColor,
        colorVariants[key]
      )
    }
    return colors
  }, {})
}
