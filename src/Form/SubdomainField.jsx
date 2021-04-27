import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { fieldShape } from './shapes'
import { makeId } from './utils'
import { SubdomainInput } from '../SubdomainInput'

export const SubdomainField = props => {
  const [field, meta, helpers] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const handleChange = useCallback(
    ev => {
      const { value } = ev.target
      return helpers.setValue(value)
    },
    [helpers]
  )
  return (
    <SubdomainInput
      {...field}
      {...props}
      id={id}
      error={meta.touched && meta.error}
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
  tinted: false
}
