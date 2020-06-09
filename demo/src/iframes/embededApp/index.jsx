import React from 'react'
import { Flex, Box } from '@ivoryio/kogaio'

export const EmbededAppChild = () => <div> EmbededApp</div>

export const EmbededAppParent = () => (
  <Flex>
    <Box width={1 / 3}>
      <div>EmbededAppParent</div>
    </Box>
    <Box width={2 / 3}>
      <iframe src='index.html?demo=embededApp' />
    </Box>
  </Flex>
)
