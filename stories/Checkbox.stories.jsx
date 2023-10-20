import React from 'react'

import { action } from '@storybook/addon-actions'

import { Box, Checkbox } from '../src'

export default {
  title: 'Demo/Checkbox',
  component: Checkbox
}

export const SimpleCheckbox = () => (
  <Checkbox onChange={action('checkbox-change')} />
)

export const WithLabel = () => (
  <Checkbox label='Free pizza' onChange={action('checkbox-change')} />
)

export const PresetState = () => (
  <Checkbox checked onChange={action('checkbox-change')} />
)

export const DisabledState = () => (
  <Checkbox label='Free pizza' disabled onChange={action('checkbox-change')} />
)

export const DisabledCheckedState = () => (
  <Checkbox
    label='Free pizza'
    disabled
    checked
    onChange={action('checkbox-change')}
  />
)

export const WrappedLabel = () => (
  <Box width='250px'>
    <Checkbox
      size='large'
      label='Quisque vitae nisi id massa consectetur feugiat at ac orci. Aliquam volutpat urna in felis maximus viverra. Curabitur congue nunc eros, eu hendrerit nisl sodales sed. Donec ultrices ut lectus at gravida. Nunc id tincidunt nisl. Fusce maximus sapien vel neque ullamcorper scelerisque. Suspendisse potenti. Proin ut lacus nisi. Proin vehicula pharetra massa nec consectetur.'
      onChange={action('checkbox-change')}
    />
  </Box>
)
