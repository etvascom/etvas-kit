import { useMemo } from 'react'

import PropTypes from 'prop-types'
import { ThemeProvider as LibThemeProvider } from 'styled-components'

import { etvasTheme, mergeDeep } from '../utils'

export const ThemeProvider = ({ children, theme }) => {
  const mergedTheme = useMemo(() => mergeDeep({}, etvasTheme, theme), [theme])
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    console.info('Current theme:', mergedTheme)
  }

  return <LibThemeProvider theme={mergedTheme}>{children}</LibThemeProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
}

ThemeProvider.defaultProps = {
  theme: {}
}
