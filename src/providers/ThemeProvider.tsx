import React, { FC, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as LibThemeProvider } from 'styled-components'
import { mergeDeep, etvasTheme } from '../utils'

interface ThemeProviderProps {
  theme?: any
  children: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = {}
}) => {
  const mergedTheme = useMemo(() => mergeDeep({}, etvasTheme, theme), [theme])
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    console.info('Current theme:', mergedTheme)
  }

  return <LibThemeProvider theme={mergedTheme}>{children}</LibThemeProvider>
}
