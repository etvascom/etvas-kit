import React, { forwardRef } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import { TextArea } from '../TextArea'
import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextAreaField = forwardRef((props, ref) => {
  const { submitCount } = useFormikContext()
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'textarea')
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <TextArea
      {...props}
      {...field}
      id={id}
      error={displayedError}
      valid={hasValidation(props) && !meta.error && meta.touched}
      ref={ref}
    />
  )
})

const hasValidation = props => props.validate || props.required

TextAreaField.propTypes = {
  ...fieldShape,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  optionalText: PropTypes.node
}

TextAreaField.defaultProps = {
  tinted: false,
  optionalText: 'Optional'
}
