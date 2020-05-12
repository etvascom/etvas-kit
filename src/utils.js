import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import { themeGet as libThemeGet } from '@styled-system/theme-get'
import { buildTheme as kogaioBuildTheme } from '@ivoryio/kogaio/utils'

import { etvasTheme } from './assets'

export const themed = libThemeGet

export const themeGet = (...args) => {
  console.warn(`
    themeGet() is deprecated. Please import and use themed().
  `)

  return themed(...args)
}
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

export const hexToRgb = hex => {
  hex = hex.replace('#', '')
  const l = hex.length / 3

  return [0, 1, 2]
    .map(i => hex.substr(l * i, l))
    .map(v => (v + v).substr(0, 2))
    .map(v => parseInt(v, 16))
}
