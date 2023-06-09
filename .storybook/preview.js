import React from 'react'
import { BrandingProvider, ThemeProvider, GlobalStyle } from '../src'

export const decorators = [
  storyFn => (
    <BrandingProvider>
      <ThemeProvider>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </BrandingProvider>
  )
]
