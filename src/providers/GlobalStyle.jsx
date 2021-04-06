import { themed } from '@ivoryio/kogaio/utils'
import { createGlobalStyle } from 'styled-components'

import EtvasIconsWoff from '../assets/icon-font/etvas-icons.woff'
import EtvasIconsWoff2 from '../assets/icon-font/etvas-icons.woff2'

import RegularFont from '../assets/webfont/regular.woff'
import RegularFont2 from '../assets/webfont/regular.woff2'

import BoldFont from '../assets/webfont/bold.woff'
import BoldFont2 from '../assets/webfont/bold.woff2'

import LightFont from '../assets/webfont/light.woff'
import LightFont2 from '../assets/webfont/light.woff2'

// import BoldItalicFont from '../assets/webfont/bold_italic.woff'
// import BoldItalicFont2 from '../assets/webfont/bold_italic.woff2'

// import LightItalicFont from '../assets/webfont/light_italic.woff'
// import LightItalicFont2 from '../assets/webfont/light_italic.woff2'

// import RegularItalicFont from '../assets/webfont/regular_italic.woff'
// import RegularItalicFont2 from '../assets/webfont/regular_italic.woff2'

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

/* FONTS */
@font-face {
  font-family: 'Helvetica Now';
  src: url(${RegularFont2}) format('woff2'),
    url(${RegularFont}) format('woff');
  font-weight: normal;
  /* font-style: normal; */
  
}

@font-face {
  font-family: 'Helvetica Now';
  src: url(${LightFont2}) format('woff2'),
    url(${LightFont}) format('woff');
  font-weight: light;
  
}

@font-face {
  font-family: 'Helvetica Now';
  src: url(${BoldFont2}) format('woff2'),
    url(${BoldFont}) format('woff');
  font-weight: 800;
  /* font-style: normal; */
  
}


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
