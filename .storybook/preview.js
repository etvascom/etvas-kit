import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '../src'

export const decorators = [
  storyFn => (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <BrandingProvider>
        <ThemeProvider>
          <GlobalStyle />
          {storyFn()}
        </ThemeProvider>
      </BrandingProvider>
    </StyleSheetManager>
  )
]

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}
