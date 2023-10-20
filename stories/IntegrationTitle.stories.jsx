import React from 'react'

import { Card, Flex, IntegrationHeader, Typography } from '../src'

export default {
  title: 'Demo/IntegrationHeader',
  component: IntegrationHeader
}

export const Example = () => (
  <Flex flexDirection='column' alignItems='stretch'>
    <IntegrationHeader
      title='Integration name'
      providerPrefix='By'
      providerName='etvas'
      url='https://etvas.com'
    />
    <Card p={4}>
      <Typography variant='textSmall'>Content</Typography>
    </Card>
  </Flex>
)
