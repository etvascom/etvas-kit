import React, { Component } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Flex } from '@ivoryio/kogaio'
import { buildTheme } from '@ivoryio/kogaio/utils'

import { Button, Initial, Typography } from '../../src'

const Playground = () => {
  return (
    <ThemeProvider theme={buildTheme({})}>
      <Flex flexDirection='column'>
        <Typography as='h1'>ETVAS Playground</Typography>
        <Initial />
        <Typography as='h4'>Title</Typography>
        <Button onClick={() => alert('Hello!')} title='Click me' />
      </Flex>
    </ThemeProvider>
  )
}

render(<Playground />, document.querySelector('#demo'))
