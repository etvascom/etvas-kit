import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Box, Flex, Space } from '@ivoryio/kogaio'

import { buildTheme, Typography } from '../../src'
import { GlobalStyle } from './GlobalStyle'
import {
  ButtonExamples,
  DropdownExamples,
  InputExamples,
  TypographyExamples,
  CardExamples,
  TooltipExamples
} from './examples'

const dummyTheme = {}
const Playground = () => (
  <ThemeProvider theme={buildTheme(dummyTheme)}>
    <GlobalStyle />
    <Flex flexDirection='column'>
      <Typography as='h1'>ETVAS Playground</Typography>
      <Space mt={3}>
        <Flex width={1}>
          <Box width={1 / 2}>
            <Typography variant='titleLarge'>Buttons</Typography>
            <ButtonExamples />
            <Space mt={6}>
              <Typography variant='titleLarge'>Typography</Typography>
            </Space>
            <TypographyExamples />
          </Box>
          <Space ml={6}>
            <Box maxWidth={400} width={1 / 2}>
              <Typography variant='titleLarge'>Inputs</Typography>
              <InputExamples />
              <Space mt={6}>
                <Box>
                  <Typography variant='titleLarge'>Dropdowns</Typography>
                  <Space mt={4}>
                    <DropdownExamples />
                  </Space>
                </Box>
              </Space>
            </Box>
          </Space>
        </Flex>
        <Space mt={6}>
          <Box>
            <Typography variant='titleLarge'>Cards</Typography>
            <CardExamples />
          </Box>
        </Space>
      </Space>
      <Space mt={6}>
        <Typography variant='titleLarge'>Tooltips</Typography>
        <TooltipExamples>
          This is an informational tooltip. It`s purpose is to inform.
        </TooltipExamples>
      </Space>
    </Flex>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
