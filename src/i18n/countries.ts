import {
  CountryWithoutCode,
  RawCountriesData,
  rawCountriesData
} from './rawCountriesData'
import { RawTimezonesData, rawTimezonesData } from './rawTimezonesData'

const Currency = (code: string, defaultValue: string = '') =>
  rawCountriesData[code.trim().toUpperCase()]?.currency || defaultValue

const Prefix = (code: string, defaultValue = '') =>
  rawCountriesData[code.trim().toUpperCase()]?.prefix || defaultValue

const Name = (
  code: string,
  type: 'full' | 'short' = 'full',
  defaultValue = ''
) => rawCountriesData[code.trim().toUpperCase()]?.[type] || defaultValue

const asArray = (func: (country: Country) => any) =>
  Object.keys(rawCountriesData).map(code =>
    func({ code, ...rawCountriesData[code] })
  )

const fromTimezone = (timezone: string) => rawTimezonesData[timezone] || ''
interface Countries {
  raw: RawCountriesData
  timezones: RawTimezonesData
  Name: (code: string, type?: 'full' | 'short', defaultValue?: string) => string
  Prefix: (code: string, defaultValue?: string) => string
  Currency: (code: string, defaultValue?: string) => string
  asArray: (func: (obj: Country) => any) => any
  fromTimezone: (timezone: string) => string
}

const Countries: Countries = {
  raw: rawCountriesData,
  timezones: rawTimezonesData,
  Name,
  Prefix,
  Currency,
  fromTimezone,
  asArray
}


export interface Country extends CountryWithoutCode {
  code: string
}
export default Countries
