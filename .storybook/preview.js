import React from 'react'
import { addDecorator } from '@storybook/react'
import { BrandingProvider, ThemeProvider } from '../src'

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </BrandingProvider>
))
