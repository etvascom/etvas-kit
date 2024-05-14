import React, { FC } from 'react'

import { useField } from 'formik'

import { RadioButton } from '../Radio'
import { RadioButtonProps } from '../Radio/RadioButton'
import { makeId } from './utils'

export const RadioField: FC<RadioButtonProps> = props => {
  const [field] = useField({
    ...props,
    type: 'radio'
  })
  const id = props.id || makeId('field', props.name || 'radio')

  return <RadioButton {...props} {...field} id={id} />
}
