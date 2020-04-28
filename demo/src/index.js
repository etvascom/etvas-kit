import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Flex, Space } from '@ivoryio/kogaio'
import { buildTheme } from '@ivoryio/kogaio/utils'

import { Typography } from '../../src'
import Buttons from './examples/Buttons'
import { etvasTheme } from '../../src/assets'

const Playground = () => (
  <ThemeProvider theme={buildTheme(etvasTheme)}>
    <Flex flexDirection='column'>
      <Typography as='h1'>ETVAS Playground</Typography>
      <Typography fontWeight='bold'>Buttons</Typography>
      <Space mt={3}>
        <Buttons />
      </Space>
    </Flex>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
