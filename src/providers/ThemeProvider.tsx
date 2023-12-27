import React,{ FC, useMemo } from 'react'
import { ThemeProvider as LibThemeProvider } from 'styled-components'

import { etvasTheme, mergeDeep } from '../utils'

interface Props {
  children: React.ReactNode
  theme?: object
}

export const ThemeProvider:FC<Props> = ({ children, theme }) => {
  const mergedTheme = useMemo(() => mergeDeep({}, etvasTheme, theme), [theme])
  if (process.env.NODE_ENV === 'development') {
    console.info('Current theme:', mergedTheme)
  }

  return <LibThemeProvider theme={mergedTheme}>{children}</LibThemeProvider>
}

ThemeProvider.defaultProps = {
  theme: {}
}
