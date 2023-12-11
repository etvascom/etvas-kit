import { Card, Chip } from '../src'

export default {
  title: 'Demo/Chip',
  component: Chip
}

export const Default = () => <Chip>Hello</Chip>
export const Colored = () => (
  <>
    <Chip color='statusError' isRounded>
      Chip text
    </Chip>
    <Chip color='statusSuccess' isRounded>
      Chip text
    </Chip>
  </>
)

export const Rounded = () => <Chip isRounded>Hello</Chip>

export const NeutralChip = () => (
  <Card p={3}>
    <Chip isNeutral>Chip text</Chip>
  </Card>
)
export const CustomChip = () => (
  <Card p={3}>
    <Chip color='statusWarning' contentColor='etvasDark'>
      Chip text
    </Chip>
  </Card>
)

export const SmallChip = () => (
  <Card p={3}>
    <Chip
      color='statusWarning'
      contentColor='etvasDark'
      typographyVariant='base8Bold'
      isRounded
    >
      Chip text
    </Chip>
  </Card>
)
