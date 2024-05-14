import React, { FC } from 'react'

import { useField } from 'formik'

import { Checkbox, CheckboxProps } from '../Checkbox'
import { makeId } from './utils'

interface CheckboxFieldProps
  extends Pick<
    CheckboxProps,
    'id' | 'name' | 'checked' | 'disabled' | 'label' | 'size' | 'variant' | 'onChange'
  > {}


export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const [field] = useField({
    ...props,
    type: 'checkbox'
  })
  const id = props.id || makeId('field', props.name || 'checkbox')

  return <Checkbox {...props} {...field} id={id} />
}
