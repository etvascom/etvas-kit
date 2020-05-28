import React from 'react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from '../src'

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

export const CustomValue = () => (
  <Checkbox value='human' label='Human' onChange={action('checkbox-change')} />
)
