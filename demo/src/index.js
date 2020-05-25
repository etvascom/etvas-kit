import React from 'react'
import { render } from 'react-dom'
import { Box, Flex, Space } from '@ivoryio/kogaio'

import {
  Typography,
  GlobalStyle,
  ThemeProvider,
  BrandingProvider
} from '../../src'
import {
  ButtonExamples,
  DropdownExamples,
  InputExamples,
  TypographyExamples,
  CardExamples,
  TooltipExamples,
  BrandingExample,
  TableExample,
  ModalExample,
  RadioButtonsExample,
  RatingExample
} from './examples'

const Playground = () => (
  <ThemeProvider>
    <BrandingProvider>
      <GlobalStyle />
      <Flex flexDirection='column'>
        <Typography as='h1' variant='titleLargest'>
          ETVAS Playground
        </Typography>
        <BrandingExample />
        <Space mt={6}>
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
          <Box>
            <Typography variant='titleLarge'>Tooltips</Typography>
            <TooltipExamples />
          </Box>
        </Space>
      </Flex>
      <Space mt={6}>
        <Box>
          <Typography variant='titleLarge'>Table</Typography>
          <TableExample />
        </Box>
      </Space>
      <Space mt={6}>
        <Typography variant='titleLarge'>Modal</Typography>
        <Box my={4}>
          <ModalExample />
        </Box>
      </Space>
      <Space mt={6}>
<<<<<<< HEAD
        <Typography variant='titleLarge'>Radio buttons</Typography>
        <RadioButtonsExample />
=======
        <Typography variant='titleLarge'>Rating</Typography>
        <Flex my={4}>
          <RatingExample />
        </Flex>
>>>>>>> 9fd55bd... Add the rating component to etvaskit
      </Space>
    </BrandingProvider>
  </ThemeProvider>
)

render(<Playground />, document.querySelector('#demo'))
