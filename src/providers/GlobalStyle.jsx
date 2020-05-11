import { themed } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  background: ${themed('colors.background')};
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

body, html {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

${themed('root')}
`
