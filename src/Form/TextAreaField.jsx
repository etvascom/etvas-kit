import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { TextArea } from '../TextArea'

import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextAreaField = forwardRef((props, ref) => {
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'textarea')

  return (
    <TextArea
      {...props}
      {...field}
      id={id}
      error={meta.touched && meta.error}
      valid={hasValidation(props) && !meta.error && meta.touched}
      ref={ref}
    />
  )
})

const hasValidation = props => props.validate || props.required

TextAreaField.propTypes = {
  ...fieldShape,
  placeholder: PropTypes.node,
  required: PropTypes.bool
}

TextAreaField.defaultProps = {
  tinted: false
}
