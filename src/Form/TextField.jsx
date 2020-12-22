import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Input } from '../Input'

import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextField = props => {
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')

  return (
    <Input
      {...props}
      {...field}
      id={id}
      error={meta.touched && meta.error}
      valid={hasValidation(props) && !meta.error && meta.touched}
      tainted={props.tainted}
    />
  )
}

const hasValidation = props => props.validate || props.required

TextField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  tainted: PropTypes.bool
}

TextField.defaultProps = {
  type: 'text',
  tainted: false
}
