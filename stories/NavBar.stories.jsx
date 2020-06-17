import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box, Flex, TextSkeleton, BlockSkeleton, NavBar } from '../src'

export default {
  title: 'Demo/NavBar',
  component: NavBar
}

export const SimpleNavBar = () => (
  <Flex flexDirection='column'>
    <NavBar>
      <NavBar.Item icon='eye' label='Overview' onClick={action('overview')} />
      <NavBar.Item
        icon='alertOctagon'
        label='Alerts'
        isActive
        onClick={action('alert')}
      />
      <NavBar.Item icon='rocket' label='Space' onClick={action('space')} />
    </NavBar>
    <Box p={4}>
      <TextSkeleton lines={2} mb={4} />
      <BlockSkeleton height='300px' width='100%' mb={4} />
      <TextSkeleton lines={5} mb={4} />
    </Box>
  </Flex>
)
