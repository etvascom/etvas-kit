import { rawCountriesData } from './rawCountriesData'
import { rawTimezonesData } from './rawTimezonesData'

const Currency = (code, defaultValue = '') =>
  rawCountriesData[code.trim().toUpperCase()]?.currency || defaultValue

const Prefix = (code, defaultValue = '') =>
  rawCountriesData[code.trim().toUpperCase()]?.prefix || defaultValue

const Name = (code, type = 'full', defaultValue = '') =>
  rawCountriesData[code.trim().toUpperCase()]?.[type] || defaultValue

const asArray = func =>
  Object.keys(rawCountriesData).map(code =>
    func({ code, ...rawCountriesData[code] })
  )

const fromTimezone = timezone => rawTimezonesData[timezone] || ''

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
