import { mergeDeep } from '@ivoryio/kogaio/assets/helpers'
import { buildTheme as kogaioBuildTheme } from '@ivoryio/kogaio/utils'

import { etvasTheme } from './assets'

export const buildTheme = customTheme => {
  const initTheme = mergeDeep(etvasTheme, customTheme)
  const updatedTheme = kogaioBuildTheme(initTheme)

  return updatedTheme
}
