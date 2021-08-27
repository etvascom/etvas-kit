import React from 'react'
import { ActivityIndicator, Card, Box, Flex } from '../src'

export default {
  title: 'Demo/ActivityIndicator',
  component: ActivityIndicator
}

export const Spinner = () => (
  <Flex alignItems='center' flexWrap='wrap'>
    <Flex justifyContent='space-evenly' width={1}>
      <ActivityIndicator
        colors={{ background: 'white', primary: 'info' }}
        size='64px'
      />
      <ActivityIndicator
        colors={{ background: 'white', primary: 'alert' }}
        size='3rem'
      />
      <ActivityIndicator
        colors={{ background: 'white', primary: 'error' }}
        size={24}
      />
    </Flex>
  </Flex>
)

export const RunningBar = () => (
  <Box py={8} mx='auto'>
    <Card width={1 / 2} variant='white' position='relative'>
      <ActivityIndicator
        colors={{ background: 'pale-white', primary: 'brand' }}
        position='absolute'
        bottom={0}
        variant='runningbar'
      />
    </Card>
  </Box>
)

export const LoadBar = () => (
  <Box py={8} mx='auto'>
    <Card width={1 / 2} variant='white' position='relative'>
      <ActivityIndicator
        colors={['info', 'alert', 'error']}
        position='absolute'
        top={0}
        variant='loadbar'
      />
    </Card>
  </Box>
)
