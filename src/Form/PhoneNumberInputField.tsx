import React, { FC, useCallback } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { PhoneNumberInput } from '../PhoneNumberInput'
import { PhoneNumberInputProps } from '../PhoneNumberInput/PhoneNumberInput'
import { makeId } from './utils'

interface Props extends PhoneNumberInputProps {
  validate?: (args: any) => any
}

export const PhoneNumberInputField: FC<
  Props & FieldHookConfig<string>
> = props => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const handleChange = useCallback(
    (event: any) => {
      const { value } = event.target
      return helpers.setValue(value)
    },
    [helpers]
  )
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <PhoneNumberInput
      {...field}
      {...(props as any)}
      id={id}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      tinted={props.tinted}
      onChange={handleChange}
    />
  )
}

const hasValidation = (props: Props) => props.validate || props.required
