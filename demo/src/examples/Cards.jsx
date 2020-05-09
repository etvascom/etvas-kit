import React from 'react'
import { Card, Box, CardWithImage, Flex, Typography } from '../../../src'

const CardExamples = () => (
  <>
    <Flex
      p={4}
      justifyContent='stretch'
      alignItems='stretch'
      flexDirection={['column', 'row']}>
      <Box m={4} width={1 / 2} height='240px'>
        <Card
          alignItems='center'
          display='flex'
          justifyContent='center'
          variant='content'
          height='100%'
          width='100%'>
          <Typography textAlign='center' variant='labelLarge'>
            Card #1
            <Typography variant='labelSmallBold'>variant: content</Typography>
          </Typography>
        </Card>
      </Box>
      <Box m={4} width={1 / 2} height='240px'>
        <Card
          alignItems='center'
          display='flex'
          justifyContent='center'
          variant='popup'
          height='100%'
          width='100%'>
          <Typography textAlign='center' variant='labelLarge'>
            Card #2
            <Typography variant='labelSmallBold'>variant: popup</Typography>
          </Typography>
        </Card>
      </Box>
    </Flex>
    <Flex
      p={4}
      justifyContent='stretch'
      alignItems='stretch'
      flexDirection={['column', 'row']}>
      <Box m={4} width={[1, 1 / 2]} height='240px'>
        <CardWithImage
          imageUrl='https://picsum.photos/250/120'
          width='100%'
          height='100%'>
          <Typography textAlign='center' variant='labelLarge'>
            CardWithImage
          </Typography>
          <Typography variant='labelSmallBold'>variant: popup</Typography>
        </CardWithImage>
      </Box>
      <Box m={4} width={[1, 1 / 2]} height='240px'>
        <CardWithImage
          imageUrl='https://picsum.photos/250/120'
          vertical
          width='100%'
          height='100%'>
          <Typography textAlign='center' variant='labelLarge'>
            CardWithImage
          </Typography>
          <Typography variant='labelSmallBold'>variant: popup</Typography>
        </CardWithImage>
      </Box>
    </Flex>
  </>
)

export default CardExamples
