import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Flex, Space } from '@ivoryio/kogaio'

import { buildTheme, Typography } from '../../src'
import { GlobalStyle } from './GlobalStyle'
import ButtonExamples from './examples/Buttons'
import TypographyExamples from './examples/Typography'
import InputExamples from './examples/Inputs'

const Playground = () => (
  <ThemeProvider theme={buildTheme({})}>
    <GlobalStyle />
    <Flex flexDirection='column'>
      <Typography as='h1'>ETVAS Playground</Typography>
      <Space mt={3}>
        <Typography variant='titleLarge'>Buttons</Typography>
        <ButtonExamples />
        <hr />
        <Typography variant='titleLarge'>Typography</Typography>
        <TypographyExamples />
        <hr />
        <Typography variant='titleLarge'>Inputs</Typography>
        <InputExamples />
      </Space>
    </Flex>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
