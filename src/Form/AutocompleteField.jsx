import { useCallback } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import { Autocomplete } from '../Autocomplete'
import { fieldShape } from './shapes'
import { makeId } from './utils'

export const AutocompleteField = ({
  optionAttributes,
  options,
  onChange,
  ...props
}) => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const handleItemChange = useCallback(
    value => helpers.setValue(value),
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
      valid={hasValidation(props) && !meta.error && meta.touched}
      tinted={props.tinted}
      onSelectItemChange={handleItemChange}
    >
      {options.map(option => (
        <Autocomplete.Option
          key={option[optionAttributes.key]}
          value={option[optionAttributes.value]}
        >
          {option[optionAttributes.value]}
        </Autocomplete.Option>
      ))}
    </Autocomplete>
  )
}

const hasValidation = props => props.validate || props.required

AutocompleteField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  tinted: PropTypes.bool
}

AutocompleteField.defaultProps = {
  type: 'text',
  tinted: false,
  optionalText: 'Optional',
  optionAttributes: {
    key: 'value',
    value: 'value'
  }
}
