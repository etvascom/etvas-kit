import { FC, useCallback } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { Autocomplete } from '../Autocomplete'
import { AutocompleteProps } from '../Autocomplete/Autocomplete'
import { OptionProps } from '../Dropdown/Option'
import { makeId } from './utils'

interface Props extends AutocompleteProps {
  options: OptionProps[]
}

export const AutocompleteField: FC<Props & FieldHookConfig<any>> = ({
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
        <Autocomplete.Option key={option.value} {...option}>
          {option.value}
        </Autocomplete.Option>
      ))}
    </Autocomplete>
  )
}