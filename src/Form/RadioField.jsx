import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { RadioButton } from '../Radio'
import { fieldShape } from './shapes'
import { makeId } from './utils'

export const RadioField = props => {
  const [field, meta] = useField({
    ...props,
    type: 'radio'
  })
  const id = props.id || makeId('field', props.name || 'radio')

  return <RadioButton {...props} {...field} id={id} />
}

RadioField.propTypes = {
  ...fieldShape
}
