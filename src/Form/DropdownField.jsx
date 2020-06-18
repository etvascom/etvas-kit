import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { fieldShape } from './shapes'
import { Dropdown } from '../Dropdown'

export const DropdownField = ({ options, ...props }) => {
  const [field, , helpers] = useField(props)

  const handleChange = useCallback(v => helpers.setValue(v), [helpers])

  const selectedOption = useMemo(
    () => options.find(({ value }) => field.value === value),
    [field, options]
  )

  const selectedLabel =
    selectedOption && selectedOption.disabled !== true
      ? selectedOption.label
      : undefined

  return (
    <Dropdown
      onChange={handleChange}
      label={props.label}
      value={selectedLabel}
      {...props}>
      {options.map(({ id, label, value }) => (
        <Dropdown.Option key={id || value} value={value}>
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
      id: PropTypes.string,
      label: PropTypes.node,
      value: PropTypes.any
    })
  )
}
