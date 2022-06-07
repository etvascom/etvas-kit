import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'
import { Input } from '../Input'

import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextField = forwardRef((props, ref) => {
  const { submitCount } = useFormikContext()
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')
  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error
  return (
    <Input
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

TextField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  notRequiredText: PropTypes.node
}

TextField.defaultProps = {
  type: 'text',
  tinted: false
}
