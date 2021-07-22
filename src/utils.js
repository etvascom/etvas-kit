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

export const rgbToHex = (r, g, b) => {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  if (r.length === 1) r = `0${r}`
  if (g.length === 1) g = `0${g}`
  if (b.length === 1) b = `0${b}`

  return `#${r}${g}${b}`
}

export const rgbToHsl = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2
  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      default:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)]
}

export const hslToRgb = (h, s, l) => {
  h = h / 360
  s = s / 100
  l = l / 100

  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export const hexToHsl = color => {
  const rgb = hexToRgb(color)
  return rgbToHsl(rgb[0], rgb[1], rgb[2])
}

export const hslToHex = ([h, s, l]) => {
  const rgb = hslToRgb(h, s, l)
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}
