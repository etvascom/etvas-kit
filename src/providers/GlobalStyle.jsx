import { themeGet } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  background: ${themeGet('colors.background')};
  min-height: 100vh;
  min-width: 100vw;
}
`
