import { themed } from '../utils'
import { createGlobalStyle } from 'styled-components'
import fonts from '../fonts.css'

export const GlobalStyle = createGlobalStyle`
:root {
  background: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : themed(props.bg || 'colors.background')};
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
  letter-spacing: 0.2px;
}

a { 
  text-decoration: none;
}

${fonts}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

${themed('root')}
`
