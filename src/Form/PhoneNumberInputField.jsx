import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'

import { fieldShape } from './shapes'
import { makeId } from './utils'
import { PhoneNumberInput } from '../PhoneNumberInput'

export const PhoneNumberInputField = props => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const handleChange = useCallback(
    ev => {
      const { value } = ev.target
      return helpers.setValue(value)
    },
    [helpers]
  )
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <PhoneNumberInput
      {...field}
      {...props}
      id={id}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      tinted={props.tinted}
      onChange={handleChange}
    />
  )
}

const hasValidation = props => props.validate || props.required

PhoneNumberInputField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  tinted: PropTypes.bool
}

PhoneNumberInputField.defaultProps = {
  tinted: false,
  optionalText: 'Optional'
}
