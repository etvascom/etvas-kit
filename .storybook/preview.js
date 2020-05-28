import React from 'react'
import { addDecorator } from '@storybook/react'
import { BrandingProvider, ThemeProvider, GlobalStyle } from '../src'

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </BrandingProvider>
))
