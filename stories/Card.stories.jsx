import React from 'react'
import { Card, Typography, CardWithImage, Box } from '../src'

export default {
  title: 'Demo/Card',
  component: Card
}

export const Simple = () => (
  <Card p={2}>
    <Typography variant='titleSmall'>This is a card</Typography>
  </Card>
)

export const ColouredCard = () => (
  <>
    <Card p={2} backgroundColor='blue'>
      <Typography variant='titleSmall'>This is a coloured card</Typography>
    </Card>
    <Card
      mt={4}
      p={2}
      bg='etvasLighter'
      boxShadow='0 0 2px'
      borderRadius='10px'>
      <Typography variant='titleSmall'>
        This is an overriden coloured card
      </Typography>
    </Card>
  </>
)

export const Popup = () => (
  <Card p={2} variant='popup'>
    <Typography variant='titleSmall'>This is a popup card</Typography>
  </Card>
)

export const WithImage = () => (
  <CardWithImage
    imageUrl='https://picsum.photos/640/360/?grayscale&blur'
    imageSize={1 / 3}
    height='300px'
    imgOnLeft={true}>
    <Typography variant='titleSmall'>CardWithImage</Typography>
    <Typography variant='textSmall'>This is the content</Typography>
  </CardWithImage>
)

export const WithImageAndNoContentPadding = () => (
  <CardWithImage
    imageUrl='https://picsum.photos/640/360/?grayscale&blur'
    imageSize={1 / 3}
    height='300px'
    imgOnLeft={true}
    contentPadding={0}>
    <Typography variant='titleSmall'>CardWithImage</Typography>
    <Typography variant='textSmall'>
      This is the content with no padding
    </Typography>
  </CardWithImage>
)

export const WithImageHero = () => (
  <CardWithImage
    variant='hero'
    imageUrl='https://picsum.photos/640/360/?grayscale&blur'
    imageSize={1 / 3}
    height='300px'>
    <Typography variant='titleSmall'>CardWithImage</Typography>
    <Typography variant='textSmall'>This is the content</Typography>
  </CardWithImage>
)

export const WithImageVertical = () => (
  <CardWithImage
    vertical
    imageUrl='https://picsum.photos/640/360/?grayscale&blur'
    imageSize={1 / 3}
    height='300px'>
    <Typography variant='titleSmall'>CardWithImage</Typography>
    <Typography variant='textSmall'>This is the content</Typography>
  </CardWithImage>
)

export const WithDifferentLayoutHero = () => (
  <CardWithImage
    imageUrl='https://picsum.photos/640/360/?grayscale&blur'
    variant='hero'
    imageSize={[1 / 2, 1 / 3]}
    height='300px'>
    <Typography variant='titleSmall'>CardWithImage</Typography>
    <Typography variant='textSmall'>
      The image should be 1/2 in desktop mode and 1/3 in mobile mode
    </Typography>
  </CardWithImage>
)
