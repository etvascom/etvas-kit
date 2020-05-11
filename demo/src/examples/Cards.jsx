import React from 'react'
import { Grid, Card, CardWithImage, Typography } from '../../../src'

const height = '280px'

const CardExamples = () => (
  <Grid cols='3'>
    <Grid.Item>
      <Card
        alignItems='center'
        display='flex'
        justifyContent='center'
        variant='content'
        height={height}
        width='100%'>
        <Typography textAlign='center' variant='labelLarge'>
          Card #1
          <Typography variant='labelSmallBold'>variant: content</Typography>
        </Typography>
      </Card>
    </Grid.Item>
    <Grid.Item span={2}>
      <Card
        alignItems='center'
        display='flex'
        justifyContent='center'
        variant='popup'
        height={height}
        width='100%'>
        <Typography textAlign='center' variant='labelLarge'>
          Card #2
          <Typography variant='labelSmallBold'>variant: popup</Typography>
        </Typography>
      </Card>
    </Grid.Item>
    <Grid.Item>
      <CardWithImage
        imageUrl='https://picsum.photos/250/120'
        width='100%'
        height={height}>
        <Typography textAlign='center' variant='labelLarge'>
          CardWithImage
        </Typography>
        <Typography variant='labelSmallBold'>variant: popup</Typography>
      </CardWithImage>
    </Grid.Item>
    <Grid.Item>
      <CardWithImage
        imageUrl='https://picsum.photos/250/120'
        vertical
        width='100%'
        height={height}>
        <Typography textAlign='center' variant='labelLarge'>
          CardWithImage
        </Typography>
        <Typography variant='labelSmallBold'>variant: popup</Typography>
      </CardWithImage>
    </Grid.Item>
  </Grid>
)

export default CardExamples
