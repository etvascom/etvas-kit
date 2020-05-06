import React from 'react'
import { Flex, Space, Typography } from '@ivoryio/kogaio'
import { Card } from '../../../src/Card'

const CardExamples = props => (
  <Flex {...props}>
    <Card
      alignItems='center'
      display='flex'
      height='240px'
      justifyContent='center'
      variant='content'
      width={1 / 3}>
      <Typography textAlign='center' variant='labelLarge'>
        Card #1{' '}
        <Typography variant='labelSmallBold'>variant: content</Typography>
      </Typography>
    </Card>
    <Space ml={6}>
      <Card
        alignItems='center'
        display='flex'
        height='240px'
        justifyContent='center'
        variant='popup'
        width={1 / 3}>
        <Typography textAlign='center' variant='labelLarge'>
          Card #2{' '}
          <Typography variant='labelSmallBold'>variant: popup</Typography>
        </Typography>
      </Card>
    </Space>
  </Flex>
)

export default CardExamples
