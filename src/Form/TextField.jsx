import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Input } from '../Input'

import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextField = props => {
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'checkbox')

  return <Input {...props} {...field} id={id} error={meta.error} />
}

TextField.propTypes = {
  ...fieldShape,
  placeholder: PropTypes.node,
  required: PropTypes.bool
}
