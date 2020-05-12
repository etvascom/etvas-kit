import styled from 'styled-components'
import { themeGet as libThemeGet } from '@styled-system/theme-get'

export const themed = libThemeGet

export const themeGet = (...args) => {
  console.warn(`
    themeGet() is deprecated. Please import and use themed().
  `)

  return themed(...args)
}

export * from './utils'
export * from './providers'

export * from './Button'
export * from './Card'
export * from './Dropdown'
export * from './Input'
export * from './Typography'
export * from './Grid'

export * from './Button'
export * from './utils'
export * from './Card'
export * from './Dropdown'
export * from './Input'
export * from './Typography'
export * from './Tooltip'
export { styled }

export * from '@ivoryio/kogaio'
