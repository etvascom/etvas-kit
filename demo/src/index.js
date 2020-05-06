import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Box, Flex, Space } from '@ivoryio/kogaio'

import { buildTheme, Typography } from '../../src'
import { GlobalStyle } from './GlobalStyle'
import {
  ButtonExamples,
  InputExamples,
  TypographyExamples,
  CardExamples
} from './examples'

const Playground = () => (
  <ThemeProvider theme={buildTheme({})}>
    <GlobalStyle />
    <Flex flexDirection='column'>
      <Typography as='h1'>ETVAS Playground</Typography>
      <Space mt={3}>
        <Flex width={1}>
          <Box width={1 / 2}>
            <Typography variant='titleLarge'>Buttons</Typography>
            <ButtonExamples />
          </Box>
          <Space ml={6}>
            <Box maxWidth={400} width={1 / 2}>
              <Typography variant='titleLarge'>Inputs</Typography>
              <InputExamples />
            </Box>
          </Space>
        </Flex>
        <hr />
        <Typography variant='titleLarge'>Typography</Typography>
        <TypographyExamples />
        <hr />
        <Typography variant='titleLarge'>Cards</Typography>
        <CardExamples />
      </Space>
    </Flex>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
