import React, { useState, useCallback } from 'react'
import { Flex, Box } from '@ivoryio/kogaio'
import {
  EmbededAppReporter,
  EmbededAppContainer,
  BlockSkeleton,
  Touchable,
  Card,
  Icon,
  Typography
} from '../../../../src'

export const EmbededAppChild = () => {
  const [height, setHeight] = useState(100)
  const taller = useCallback(() => setHeight(height + 100), [setHeight, height])
  const shorter = useCallback(() => setHeight(height - 100), [
    setHeight,
    height
  ])

  return (
    <EmbededAppReporter>
      <Card p={4}>
        <Flex
          justifyContent='space-between'
          width='fit-content'
          mx='auto'
          p={4}
          alignItems='center'>
          <Touchable onClick={taller}>
            <Icon name='plus' color='brand' />
          </Touchable>
          <Typography variant='labelButton' mx={4}>
            {height} px
          </Typography>
          <Touchable onClick={shorter}>
            <Icon name='minus' color='brand' />
          </Touchable>
        </Flex>
        <BlockSkeleton width='100%' height={`${height}px`} />
      </Card>
    </EmbededAppReporter>
  )
}

export const EmbededAppParent = () => (
  <Flex>
    <Box width={1 / 3}>
      <div>EmbededAppParent</div>
    </Box>
    <Box width={2 / 3}>
      <EmbededAppContainer src='index.html?demo=embededApp' />
    </Box>
  </Flex>
)
