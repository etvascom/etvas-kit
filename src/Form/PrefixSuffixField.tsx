import { FC, useCallback } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { PrefixSuffixInput, PrefixSuffixInputProps } from '../PrefixSuffixInput'
import { makeId } from './utils'

interface Props extends PrefixSuffixInputProps {
  validate?: (args: any) => any
}

export const PrefixSuffixField: FC<Props & FieldHookConfig<string>> = props => {
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
    <PrefixSuffixInput
      {...field}
      {...(props as any)}
      id={id}
      optionalText={props.optionalText || 'Optional'}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      onChange={handleChange}
    />
  )
}

const hasValidation = (props: Props) => props.validate || props.required
