import { CardSkeleton, Flex, TextSkeleton } from '../src'

export default {
  title: 'Demo/Skeletons/Card',
  component: CardSkeleton
}

const TextPlaceholder = () => (
  <Flex height='100%' flexDirection='column' justifyContent='space-between'>
    <TextSkeleton width='120px' />
    <TextSkeleton lines={3} my={8} />
    <TextSkeleton width='75px' />
  </Flex>
)

export const Default = () => (
  <CardSkeleton width='400px'>
    <TextPlaceholder />
  </CardSkeleton>
)

export const ImagePosition = () => (
  <Flex justifyContent='space-between'>
    <CardSkeleton imagePosition='top' height='350px' width='275px'>
      <TextPlaceholder />
    </CardSkeleton>
    <CardSkeleton imagePosition='bottom' height='350px' width='275px'>
      <TextPlaceholder />
    </CardSkeleton>
    <CardSkeleton imagePosition='left' height='350px' width='275px'>
      <TextPlaceholder />
    </CardSkeleton>
  </Flex>
)

export const ImageSize = () => (
  <Flex justifyContent='space-between'>
    <CardSkeleton imageSize={1 / 2} height='250px' width='475px'>
      <TextPlaceholder />
    </CardSkeleton>
    <CardSkeleton imageSize={1 / 4} height='250px' width='475px'>
      <TextPlaceholder />
    </CardSkeleton>
  </Flex>
)
