import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { Checkbox } from '../Checkbox'
import { fieldShape } from './shapes'
import { makeId } from './utils'

export const CheckboxField = props => {
  const [field, meta] = useField({
    ...props,
    type: 'checkbox'
  })
  const id = props.id || makeId('field', props.name || 'checkbox')

  return <Checkbox {...props} {...field} id={id} />
}

CheckboxField.propTypes = {
  ...fieldShape
}
