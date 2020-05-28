import React from 'react'
import { Box, Flex, Grid, Icon, Typography } from '../src'

export default {
  title: 'Demo/Icon',
  component: Icon
}

export const Default = () => <Icon name='circleArrowLeft' />
export const Color = () => <Icon name='circleArrowLeft' color='brand' />
export const Size = () => <Icon name='circleArrowLeft' size='200%' />
export const AllIcons = () => {
  return (
    <Grid cols={5} vspace='24px' hspace='24px'>
      {Object.keys(Icon.glyphs).map(k => (
        <Grid.Item key={k}>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Box mb={1}>
              <Icon name={k} size='18px' />
            </Box>
            <Typography color='outline' variant='textSmall'>
              {k}
            </Typography>
          </Flex>
        </Grid.Item>
      ))}
    </Grid>
  )
}
