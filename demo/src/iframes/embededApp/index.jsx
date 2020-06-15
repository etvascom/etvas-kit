import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
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
  <Flex justifyContent='space-between'>
    <Box width='35%'>
      <Typography variant='titleSmall'>EmbededAppParent</Typography>
      <Typography variant='textSmall'>The box wrapping the iframe:</Typography>
      <IframeWrapper width='100%' height='100px'></IframeWrapper>
    </Box>
    <IframeWrapper width='60%'>
      <EmbededAppContainer src='index.html?demo=embededApp' />
    </IframeWrapper>
  </Flex>
)

const IframeWrapper = styled(Box)(
  css({
    border: '2px solid',
    backgroundColor: 'brandFade',
    color: 'outline'
  })
)
