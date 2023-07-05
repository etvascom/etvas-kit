import React from 'react'

import { Box, Flex, Icon, Touchable } from '../src'

export default {
  title: 'Demo/Touchable',
  component: Touchable
}

export const TouchableExamples = () => (
  <Flex alignItems='center' p={3}>
    <Box width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
      <Touchable effect='no-feedback' p='12px' onClick={() => {}}>
        Touchable Without Feedback
      </Touchable>
    </Box>
    <Box width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
      <Touchable
        activeOpacity={0.75}
        alignItems='center'
        display='flex'
        effect='opacity'
        onClick={() => {}}>
        <Icon name='globe' /> Touchable Opacity
      </Touchable>
    </Box>
    <Box width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
      <Touchable
        effect='highlight'
        onClick={() => {}}
        p='12px'
        underlayColor='brand'>
        Touchable Highlight
      </Touchable>
    </Box>
  </Flex>
)
