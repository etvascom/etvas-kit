import React, { useCallback, useState } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import {
  BlockSkeleton,
  Box,
  Card,
  Checkbox,
  EmbededAppContainer,
  EmbededAppReporter,
  Flex,
  Icon,
  Touchable,
  Typography
} from '../../../../src'

export const EmbededAppChild = () => {
  const [height, setHeight] = useState(100)
  const [useReporter, setUseReporter] = useState(false)
  const taller = useCallback(() => setHeight(height + 100), [setHeight, height])
  const shorter = useCallback(
    () => setHeight(height - 100),
    [setHeight, height]
  )

  const toggleReporter = useCallback(
    ev => {
      setUseReporter(!useReporter)
    },
    [useReporter, setUseReporter]
  )

  const content = (
    <Card p={4} m={4}>
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
        <Box ml={4}>
          <Checkbox
            onChange={toggleReporter}
            checked={useReporter}
            label='Use reporter'
          />
        </Box>
      </Flex>
      <BlockSkeleton width='100%' height={`${height}px`} />
    </Card>
  )
  if (useReporter) {
    return <EmbededAppReporter>{content}</EmbededAppReporter>
  }

  return content
}

export const EmbededAppParent = () => (
  <Flex justifyContent='space-between'>
    <Box width='35%'>
      <Typography variant='titleSmall'>EmbededAppParent</Typography>
      <Typography variant='textSmall'>The box wrapping the iframe:</Typography>
      <IframeWrapper width='100%' height='100px'></IframeWrapper>
    </Box>
    <IframeWrapper width='60%'>
      <EmbededAppContainer
        src='index.html?demo=embededApp'
        defaultHeight='500px'
      />
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
