import { FC, useCallback } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { Autocomplete } from '../Autocomplete'
import { AutocompleteProps } from '../Autocomplete/Autocomplete'
import { makeId } from './utils'

interface Props extends AutocompleteProps {
  options: any[]
  optionAttributes?: {
    key: string
    value: string
    id: string
  }
}

export const AutocompleteField: FC<Props & FieldHookConfig<any>> = ({
  optionAttributes = defaultOptionAttributes,
  options,
  ...props
}) => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const handleItemChange = useCallback(
    (value: any) => helpers.setValue(value),
    [helpers]
  )
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <Autocomplete
      {...props}
      {...field}
      id={id}
      error={displayedError}
      type={props.type || 'text'}
      tinted={props.tinted || false}
      optionalText={props.optionalText || 'Optional'}
      onSelectItemChange={handleItemChange}>
      {options.map(option => (
        <Autocomplete.Option
          id={option[optionAttributes.id]}
          key={option[optionAttributes.key]}
          value={option[optionAttributes.value]}>
          {option[optionAttributes.value]}
        </Autocomplete.Option>
      ))}
    </Autocomplete>
  )
}

const defaultOptionAttributes = {
  key: 'value',
  value: 'value',
  id: 'id'
}