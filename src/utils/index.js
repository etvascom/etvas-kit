import { themeGet as libThemeGet } from '@styled-system/theme-get'
import { buildTheme as kogaioBuildTheme } from '@ivoryio/kogaio/utils'
import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import { etvasTheme } from '../assets'
import colorUtilities from './colorUtilities'

/**
 * @deprecated
 */
export const themeGet = (...args) => {
  console.warn(`
  themeGet() is deprecated. Please import and use themed().
  `)

  return themed(...args)
}

export * from './border'
export const themed = libThemeGet
export { etvasTheme, mergeDeep }

export const buildTheme = customTheme => {
  const initTheme = mergeDeep(etvasTheme, customTheme)
  const updatedTheme = kogaioBuildTheme(initTheme)

  return updatedTheme
}

export const media = (breakpoint, rules) => ({
  [`@media (min-width: ${breakpoint})`]: rules
})

export const sm = theme => rules => media(theme.breakpoints[0], rules)
export const md = theme => rules => media(theme.breakpoints[1], rules)
export const lg = theme => rules => media(theme.breakpoints[2], rules)

export const {
  rgb2hex,
  hex2rgb,
  hsl2hex,
  hex2hsl,
  hex2hsv,
  hsv2hex,
  rgb2hsl,
  hsl2rgb,
  shading,
  lighten,
  darken
} = colorUtilities

// export const hexToHsl = color => {
//   const rgb = hex2rgb(color)
//   return rgb2hsl(rgb[0], rgb[1], rgb[2])
// }

// export const hsl2hex = ([h, s, l]) => {
//   const rgb = hsl2rgb(h, s, l)
//   return rgb2hex(rgb[0], rgb[1], rgb[2])
// }
