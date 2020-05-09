import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import {
  themeGet,
  themed,
  buildTheme as kogaioBuildTheme
} from '@ivoryio/kogaio/utils'

import { etvasTheme } from './assets'

export { etvasTheme, mergeDeep, themed, themeGet }

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
