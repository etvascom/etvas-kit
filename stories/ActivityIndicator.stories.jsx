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
        colors={{ background: 'baseWhite', primary: 'statusWarning' }}
        size='64px'
      />
      <ActivityIndicator
        colors={{ background: 'baseWhite', primary: 'statusSuccess' }}
        size='3rem'
      />
      <ActivityIndicator
        colors={{ background: 'baseWhite', primary: 'statusError' }}
        size={24}
      />
    </Flex>
  </Flex>
)

export const RunningBar = () => (
  <Box py={8} mx='auto'>
    <Card width={1 / 2} variant='baseWhite' position='relative'>
      <ActivityIndicator
        colors={{ background: 'baseWhite', primary: 'brand' }}
        position='absolute'
        bottom={0}
        variant='runningbar'
      />
    </Card>
  </Box>
)

export const LoadBar = () => (
  <Box py={8} mx='auto'>
    <Card width={1 / 2} position='relative'>
      <ActivityIndicator
        colors={['statusWarning', 'statusSuccess', 'statusError']}
        position='absolute'
        top={0}
        variant='loadbar'
      />
    </Card>
  </Box>
)
