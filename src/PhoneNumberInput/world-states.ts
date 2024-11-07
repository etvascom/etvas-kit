import { Countries, Country } from '../i18n'

export interface State {
  name: string
  code: string
  isEU: boolean
  prefix: string
}

export const statesWorld: State[] = Countries.asArray((country: Country) => ({
  name: country.native
    ? `${country.short || country.full} (${country.native})`
    : country.full,
  code: country.code,
  isEU: country.isEU,
  prefix: country.prefix
}))

export const statesEu = statesWorld.filter(({ isEU }) => isEU)

export const orderedStates = statesWorld.sort((a, b) =>
  a.isEU && b.isEU ? a.name.localeCompare(b.name) : a.isEU ? -1 : 1
)

export const prefixLengthOrderedStates = statesWorld
  .slice(0)
  .sort((a, b) => a.prefix.length - b.prefix.length)
