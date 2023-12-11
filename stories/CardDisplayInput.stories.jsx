import { action } from '@storybook/addon-actions'

import { CardDisplayInput } from '../src'

export default {
  title: 'Demo/CardDisplayInput',
  component: CardDisplayInput
}

export const Default = () => (
  <>
    <CardDisplayInput
      label='Card display input default'
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with no value'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with no bottom space'
      noBottomSpace={true}
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with sub label'
      subLabel='This is a sub label'
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input disabled'
      disabled={true}
      value='1234'
      onEdit={action('SHOULD NOT HAVE BEEN CLICKED')}
    />
  </>
)
