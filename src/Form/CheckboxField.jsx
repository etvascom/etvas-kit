import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { Checkbox } from '../Checkbox'
import { fieldShape } from './shapes'

export const CheckboxField = props => {
  const [field, meta] = useField({
    ...props,
    type: 'checkbox'
  })

  return <Checkbox {...props} {...field} />
}

CheckboxField.propTypes = {
  ...fieldShape
}
