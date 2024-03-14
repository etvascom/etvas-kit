import React, { InputHTMLAttributes, forwardRef } from 'react'

import { FieldConfig, useField, useFormikContext } from 'formik'

import { Input, InputProps } from '../Input'
import { makeId } from './utils'

interface Props
  extends Omit<InputProps, 'color' | 'height' | 'size' | 'width'>,
    InputHTMLAttributes<HTMLInputElement> {
  validate?: (args: any) => any
}
export const TextField = forwardRef<
  HTMLInputElement,
  Props & FieldConfig<string>
>((props, ref) => {
  const { submitCount } = useFormikContext()
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <Input
      {...props}
      {...field}
      id={id}
      type={props.type || 'text'}
      optionalText={props.optionalText || 'Optional'}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      ref={ref}
    />
  )
})

const hasValidation = (props: Props) => props.validate || props.required
