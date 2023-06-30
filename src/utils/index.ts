import { themeGet as libThemeGet } from '@styled-system/theme-get'
import { mergeDeep } from './mergeDeep'
import { etvasTheme } from '../assets'
import colorUtilities from './colorUtilities'
import useResizeObserver from './hooks/useResizeObserver'

/**
 * @deprecated
 */
export const themeGet = (...args: Parameters<typeof themed>) => {
  console.warn(`
  themeGet() is deprecated. Please import and use themed().
  `)

  return themed(...args)
}

export * from './border'
export const themed = libThemeGet
export { etvasTheme, mergeDeep, useResizeObserver }

export const buildTheme = (customTheme: any): any => {
  const updatedTheme = mergeDeep(etvasTheme, customTheme)
  return updatedTheme
}

export const media = (breakpoint: string | number, rules) => ({
  [`@media (min-width: ${breakpoint})`]: rules
})

export const sm = (theme: any) => (rules: any[]) =>
  media(theme.breakpoints[0], rules)
export const md = (theme: any) => (rules: any[]) =>
  media(theme.breakpoints[1], rules)
export const lg = (theme: any) => (rules: any[]) =>
  media(theme.breakpoints[2], rules)

export const {
  rgb2hex,
  hex2Rgba,
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
