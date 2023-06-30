import { rawCountriesData } from './rawCountriesData'
import { rawTimezonesData } from './rawTimezonesData'

const Currency = (code: string, defaultValue = ''): string =>
  rawCountriesData[code.trim().toUpperCase() as keyof typeof rawCountriesData]
    ?.currency || defaultValue

const Prefix = (code: string, defaultValue = ''): string =>
  rawCountriesData[code.trim().toUpperCase() as keyof typeof rawCountriesData]
    ?.prefix || defaultValue

type NameType = 'full' | 'prefix' | 'currency'

const Name = (
  code: string,
  type: NameType = 'full',
  defaultValue = ''
): string =>
  rawCountriesData[
    code.trim().toUpperCase() as keyof typeof rawCountriesData
  ]?.[type] || defaultValue

interface AsArrayCallback<T> {
  (data: any): T
}

const asArray = <T>(func: AsArrayCallback<T>): T[] =>
  Object.keys(rawCountriesData).map(code =>
    func({ code, ...rawCountriesData[code as keyof typeof rawCountriesData] })
  )

const fromTimezone = (timezone: string): string =>
  rawTimezonesData[timezone as keyof typeof rawTimezonesData] || ''

const Countries = {
  raw: rawCountriesData,
  timezones: rawTimezonesData,
  Name,
  Prefix,
  Currency,
  fromTimezone,
  asArray
}

export default Countries
