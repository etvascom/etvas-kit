import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle, ThemeProvider, BrandingProvider } from '../../src'
import { Root, EmbededAppChild } from './iframes'

const urlParams = new URLSearchParams(window.location.search)
const demo = urlParams.get('demo') || 'root'

const NotFound = () => (
  <div>
    Demo not found: <code>{demo}</code>
  </div>
)

const components = {
  root: Root,
  embededApp: EmbededAppChild
}

const Component = components[demo] || NotFound

const Demo = () => (
  <ThemeProvider>
    <BrandingProvider>
      <GlobalStyle />
      <Component />
    </BrandingProvider>
  </ThemeProvider>
)

render(<Demo />, document.querySelector('#demo'))
