import React from 'react'

import { RadioButton } from '../src'

export default {
  title: 'Demo/RadioButton',
  component: RadioButton
}

export const RadioButtons = () => (
  <>
    <RadioButton checked label='Normal' />
    <RadioButton checked variant='checkmark' label='Checkmark' />
  </>
)

export const DisabledRadioButtons = () => (
  <>
    <RadioButton checked disabled label='label 1' />
    <RadioButton disabled label='label 2' />
    <RadioButton checked disabled label='label 3' variant='checkmark' />
    <RadioButton disabled label='label 4' variant='checkmark' />
  </>
)
