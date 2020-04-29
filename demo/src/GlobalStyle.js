import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@ivoryio/kogaio/utils'

export const GlobalStyle = createGlobalStyle`
  ${themeGet('root')};
`
