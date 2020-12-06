import React from 'react'
import { addDecorator } from '@storybook/react'
import { BrandingProvider, ThemeProvider, GlobalStyle } from '../src'

const rootElementStyle = document.documentElement.style

rootElementStyle.setProperty('--etvas-brand-color', '#0040E3')
rootElementStyle.setProperty('--etvas-brand-color-light', '#5585FF')

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </BrandingProvider>
))
