import React from 'react'
import { Flex, Grid, Icon, Card, Typography } from '../src'
import { alternates } from '../src/Icon/glyphs'

export default {
  title: 'Demo/Icon',
  component: Icon
}

export const Default = () => <Icon name='circleArrowLeft' />
export const Color = () => <Icon name='circleArrowLeft' color='brand' />
export const Size = () => (
  <Flex alignItems='start'>
    <Flex
      m={4}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Card my={1} p={2}>
        <Icon name='circleArrowLeft' size='small' />
      </Card>
      <Typography color='outline' variant='textSmall'>
        Small (16px)
      </Typography>
      <Typography color='outline' variant='textSmall'>
        Default
      </Typography>
    </Flex>
    <Flex
      m={4}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Card my={1} p={2}>
        <Icon name='circleArrowLeft' size='medium' />
      </Card>
      <Typography color='outline' variant='textSmall'>
        Medium (20px)
      </Typography>
    </Flex>
    <Flex
      m={4}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Card my={1} p={2}>
        <Icon name='circleArrowLeft' size='large' />
      </Card>
      <Typography color='outline' variant='textSmall'>
        Large (32px)
      </Typography>
    </Flex>
  </Flex>
)

export const AllIcons = () => (
  <>
    <Typography variant='titleLargest' textAlign='center' mb={6}>
      Included icons ({Object.keys(Icon.glyphs).length})
    </Typography>
    <Grid cols={5} vspace='16px' hspace='24px'>
      {Object.keys(Icon.glyphs).map(k => (
        <Grid.Item key={k}>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Card my={1} p={2}>
              <Icon name={k} size='small' />
            </Card>
            <Typography
              color={alternates[k] ? 'error' : 'outline'}
              variant='textSmall'>
              {k}
            </Typography>
          </Flex>
        </Grid.Item>
      ))}
    </Grid>
  </>
)
