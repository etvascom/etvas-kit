import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Flex, Space } from '@ivoryio/kogaio'
import { buildTheme } from '@ivoryio/kogaio/utils'

import { Typography } from '../../src'
import { GlobalStyle } from './GlobalStyle'
import ButtonExamples from './examples/Buttons'
import TypographyExamples from './examples/Typography'
import { etvasTheme } from '../../src/assets'

const Playground = () => (
  <ThemeProvider theme={buildTheme(etvasTheme)}>
    <GlobalStyle />
    <Flex flexDirection='column'>
      <Typography as='h1'>ETVAS Playground</Typography>
      <Space mt={3}>
        <Typography variant='title-large'>Buttons</Typography>
        <ButtonExamples />
        <hr />
        <Typography variant='title-large'>Typography</Typography>
        <TypographyExamples />
      </Space>
    </Flex>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
