import { themed } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

import EtvasIconsWoff from '../assets/icon-font/etvas-icons.woff'
import EtvasIconsWoff2 from '../assets/icon-font/etvas-icons.woff2'

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
}

a { 
  text-decoration: none;
}
@font-face {
  font-family: 'EtvasIcons';
  src: local('EtvasIcons'), local('EtvasIcons'),
  url(${EtvasIconsWoff2}) format('woff2'),
  url(${EtvasIconsWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

${themed('root')}
`
