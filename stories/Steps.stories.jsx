import { action } from '@storybook/addon-actions'

import { Steps } from '../src'

export default {
  title: 'Demo/Steps',
  component: Steps
}

export const Example = () => (
  <Steps
    steps={[
      'Step 1 is simple',
      'Step 2 is',
      'Step 3 is longer and more complex and more words'
    ]}
    onChange={action('change')}
    active={2}
  />
)
