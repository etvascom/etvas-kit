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
