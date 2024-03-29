import { createGlobalStyle } from 'styled-components'

import LightFont from '../assets/webfont/light.woff'
import LightFont2 from '../assets/webfont/light.woff2'
import MediumFont from '../assets/webfont/medium.woff'
import MediumFont2 from '../assets/webfont/medium.woff2'
import BoldFont from '../assets/webfont/xbold.woff'
import BoldFont2 from '../assets/webfont/xbold.woff2'
import { themed } from '../utils'

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

@font-face {
  font-family: 'Helvetica Now';
  src: local('Helvetica Now'), local('HelveticaNow'),
    url(${LightFont2}) format('woff2'),
    url(${LightFont}) format('woff');
  font-weight: lighter;
  font-weight: 100;
  font-weight: 200;
  font-weight: 300;
}

@font-face {
  font-family: 'Helvetica Now';
  src: local('Helvetica Now'), local('HelveticaNow'),
    url(${MediumFont2}) format('woff2'),
    url(${MediumFont}) format('woff');
  font-weight: normal;
  font-weight: 400;
  font-weight: 500;
}

@font-face {
  font-family: 'Helvetica Now';
  src: local('Helvetica Now'), local('HelveticaNow'),
    url(${BoldFont2}) format('woff2'),
    url(${BoldFont}) format('woff');
  font-weight: bold;
  font-weight: 600;
  font-weight: 700;
  font-weight: 800;
  font-weight: 900;
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
