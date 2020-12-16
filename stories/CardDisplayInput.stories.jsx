import React from 'react'
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
      id='id'
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with no value'
      id='id'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with no bottom space'
      id='id'
      noBottomSpace={true}
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input default with sub label'
      id='id'
      subLabel='This is a sub label'
      value='1234'
      onEdit={action('CLICKED')}
    />
    <CardDisplayInput
      label='Card display input disabled'
      id='id'
      disabled={true}
      value='1234'
      onEdit={action('SHOULD NOT HAVE BEEN CLICKED')}
    />
  </>
)
