import { themeGet } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${themeGet('root')};
`
