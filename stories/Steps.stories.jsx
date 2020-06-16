import React from 'react'
import { action } from '@storybook/addon-actions'

import { Steps } from '../src'

export default {
  title: 'Demo/Steps',
  component: Steps
}

export const Example = () => (
  <Steps steps={['Step1', 'Step 2']} onChange={action('change')} active={2} />
)
