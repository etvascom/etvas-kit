import isPropValid from '@emotion/is-prop-valid'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'

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
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <ThemeProvider>
      <BrandingProvider>
        <GlobalStyle />
        <Component />
      </BrandingProvider>
    </ThemeProvider>
  </StyleSheetManager>
)

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}

const rootDemo = createRoot(document.querySelector('#demo'))

rootDemo.render(<Demo />)
