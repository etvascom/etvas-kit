import { forwardRef } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { TextArea, TextAreaProps } from '../TextArea'
import { makeId } from './utils'

interface Props extends TextAreaProps {
  validate?: (args: any) => any
  showValidationBeforeSubmit?: boolean
}

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  Props & FieldHookConfig<string>
>((props, ref) => {
  const { submitCount } = useFormikContext()
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'textarea')
  const error = meta.touched && meta.error
  const displayedError =
    submitCount > 0 || props.showValidationBeforeSubmit
      ? error
      : field.value && error
  return (
    <TextArea
      {...props}
      {...field}
      optionalText={props.optionalText || 'Optional'}
      id={id}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      ref={ref}
    />
  )
})

const hasValidation = (props: Props) => props.validate || props.required
