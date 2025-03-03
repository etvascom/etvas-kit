import { Box, ImageStack } from '../src'
import normal1 from './assets/images/normal1.jpg'
import normal2 from './assets/images/normal2.jpg'
import normal3 from './assets/images/normal3.jpg'
import tall1 from './assets/images/tall1.jpg'
import wide1 from './assets/images/wide1.jpg'

export default {
  title: 'Demo/ImageStack',
  component: ImageStack
}

const images = [normal1, normal2, normal3, wide1, tall1]

export const Default = () => (
  <Box m={4}>
    <ImageStack
      sources={[...[...images].slice(0, 1), ...[...images].slice(1, 5)]}
      width={320}
      height={180}
      alt='default'
      mb={10}
    />
    <ImageStack
      sources={[
        ...[...images].slice(1, 2),
        ...[...images].slice(2, 5),
        ...[...images].slice(0, 1)
      ]}
      width={320}
      height={180}
      alt='default'
      mb={10}
    />
    <ImageStack
      sources={[
        ...[...images].slice(2, 3),
        ...[...images].slice(3, 5),
        ...[...images].slice(0, 2)
      ]}
      width={320}
      height={180}
      alt='default'
      mb={10}
    />
    <ImageStack
      sources={[
        ...[...images].slice(3, 4),
        ...[...images].slice(4, 5),
        ...[...images].slice(0, 3)
      ]}
      width={320}
      height={180}
      alt='default'
      mb={10}
    />
    <ImageStack
      sources={[...[...images].slice(4, 5), ...[...images].slice(0, 4)]}
      width={320}
      height={180}
      alt='default'
      mb={10}
    />
  </Box>
)

export const LimitedImagesShown = () => (
  <Box m={4}>
    <ImageStack
      sources={[...images]}
      alt='default'
      width={320}
      height={180}
      maxImagesShown={3}
      mb={10}
    />

    <ImageStack
      sources={[...images]}
      alt='default'
      width={320}
      height={180}
      maxImagesShown={2}
      mb={10}
    />

    <ImageStack
      sources={[...images]}
      alt='default'
      width={320}
      height={180}
      maxImagesShown={1}
      mb={10}
    />
  </Box>
)

export const ScaleFactorDemo = () => {
  const _images = Array.from({ length: 50 }).map(
    (_, i) => images[i % images.length]
  )

  return (
    <Box m={4}>
      {_images.map((_, i) => (
        <ImageStack
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          sources={_images}
          alt='default'
          width={320}
          height={180}
          maxImagesShown={i}
          scaleFactor={i}
          mb={10}
        />
      ))}
    </Box>
  )
}
