import React from 'react'

import { addDecorator } from '@storybook/react'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '../src'

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </BrandingProvider>
))
