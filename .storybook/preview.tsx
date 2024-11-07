import React from 'react'

import isPropValid from '@emotion/is-prop-valid'
import { Decorator } from '@storybook/react'
import { StyleSheetManager } from 'styled-components'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '../src'

export const decorators: Decorator[] = [
  Story => (
    <StyleSheetManagerWrapper shouldForwardProp={shouldForwardProp}>
      <BrandingProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </BrandingProvider>
    </StyleSheetManagerWrapper>
  )
]

const StyleSheetManagerWrapper = ({ children, ...props }) => (
  <StyleSheetManager {...props}>{children}</StyleSheetManager>
)

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}
