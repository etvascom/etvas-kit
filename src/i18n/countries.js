import { rawCountriesData } from './rawCountriesData'

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

const Countries = {
  raw: rawCountriesData,
  Name,
  Prefix,
  Currency,
  asArray
}

export default Countries
