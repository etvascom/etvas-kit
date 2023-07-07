import React from 'react'

import { addDecorator } from '@storybook/react'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '../src'

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
