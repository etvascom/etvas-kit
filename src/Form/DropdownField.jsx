import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { fieldShape } from './shapes'
import { Dropdown } from '../Dropdown'

export const DropdownField = ({ options, ...props }) => {
  const [field, meta, helpers] = useField(props)

  const handleChange = useCallback(v => helpers.setValue(v), [helpers])

  const selectedOption = useMemo(
    () => options.find(({ value }) => field.value === value),
    [field, options]
  )

  const selectedLabel = selectedOption ? selectedOption.label : undefined

  return (
    <Dropdown onChange={handleChange} label={props.label} value={selectedLabel}>
      {options.map(({ label, value }) => (
        <Dropdown.Option key={value} value={value}>
          {label}
        </Dropdown.Option>
      ))}
    </Dropdown>
  )
}

DropdownField.propTypes = {
  ...fieldShape,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.any
    })
  )
}
