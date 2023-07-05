import React, { useCallback } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import { SubdomainInput } from '../SubdomainInput'
import { fieldShape } from './shapes'
import { makeId } from './utils'

export const SubdomainField = props => {
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
    <SubdomainInput
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

SubdomainField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  tinted: PropTypes.bool
}

SubdomainField.defaultProps = {
  tinted: false,
  optionalText: 'Optional'
}
