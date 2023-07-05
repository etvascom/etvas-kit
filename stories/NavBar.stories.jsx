import React, { useCallback, useState } from 'react'

import { action } from '@storybook/addon-actions'

import { BlockSkeleton, Box, Flex, NavBar, TextSkeleton } from '../src'

export default {
  title: 'Demo/NavBar',
  component: NavBar
}

export const SimpleNavBar = () => {
  const [activeItem, setActiveItem] = useState('overview')

  const setAction = useCallback(
    name => {
      setActiveItem(name)
      action(name)
    },
    [setActiveItem]
  )

  return (
    <Flex flexDirection='column'>
      <NavBar>
        <NavBar.Item
          as='a'
          icon='eye'
          label='Overview'
          isActive={activeItem === 'overview'}
          onClick={() => setAction('overview')}
        />
        <NavBar.Item
          as='a'
          icon='alertOctagon'
          label='VeryLongItemNameWithoutSpace'
          isActive={activeItem === 'long'}
          onClick={() => setAction('long')}
        />
        <NavBar.Item
          as='a'
          icon='rocket'
          label='Space'
          isActive={activeItem === 'shopping'}
          onClick={() => setAction('shopping')}
        />
        <NavBar.Item
          as='a'
          icon='cart'
          label='Shopping Is Fun'
          isActive={activeItem === 'cart'}
          onClick={() => setAction('cart')}
        />
      </NavBar>
      <Box p={4}>
        <TextSkeleton lines={2} mb={4} />
        <BlockSkeleton height='300px' width='100%' mb={4} />
        <TextSkeleton lines={5} mb={4} />
      </Box>
    </Flex>
  )
}
