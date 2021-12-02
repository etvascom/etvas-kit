import { Countries } from '../i18n'

export const statesWorld = Countries.asArray(country => ({
  name: country.full,
  code: country.code,
  isEU: country.isEU,
  prefix: country.prefix
}))

export const statesEu = statesWorld.filter(({ isEU }) => isEU)

export const prefixLengthOrderedStates = statesWorld
  .slice(0)
  .sort((a, b) => a.prefix.length - b.prefix.length)
