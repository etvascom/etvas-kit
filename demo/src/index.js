import React from 'react'

import { render } from 'react-dom'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '../../src'
import { EmbededAppChild, ModalChild, Root } from './iframes'

const urlParams = new URLSearchParams(window.location.search)
const demo = urlParams.get('demo') || 'root'

const NotFound = () => (
  <div>
    Demo not found: <code>{demo}</code>
  </div>
)

const components = {
  root: Root,
  embededApp: EmbededAppChild,
  modals: ModalChild
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
