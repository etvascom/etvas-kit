import React from 'react'
import { action } from '@storybook/addon-actions'
import { Flex, Button } from '../src'

export default {
  title: 'Button',
  component: Button
}

export const Variants = () => (
  <Flex>
    <Button variant='primary' onClick={action('clicked')}>
      Hello Button
    </Button>

    <Button variant='outline' onClick={action('clicked')}>
      Hello Button
    </Button>
  </Flex>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
)
