import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { RadioButton } from '../Radio'
import { fieldShape } from './shapes'

export const RadioField = props => {
  const [field, meta] = useField({
    ...props,
    type: 'radio'
  })

  return <RadioButton {...props} {...field} />
}

RadioField.propTypes = {
  ...fieldShape
}
