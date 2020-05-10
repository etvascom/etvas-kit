import { themed } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  background: ${themed('colors.background')};
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
}
${themed('root')}
`
