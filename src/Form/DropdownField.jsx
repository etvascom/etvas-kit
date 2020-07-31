import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { fieldShape } from './shapes'
import { Dropdown } from '../Dropdown'

export const DropdownField = ({
  options,
  optionAttributes,
  error,
  required,
  multiple,
  ...props
}) => {
  const [field, meta, helpers] = useField(props)

  const handleChange = useCallback(v => helpers.setValue(v), [helpers])

  const selectedOption = useMemo(
    () =>
      options.find(option => field.value === option[optionAttributes.value]),
    [field, options, optionAttributes]
  )
  const selectedLabel = selectedOption ? selectedOption.label : undefined
  const selectedValue = selectedOption ? selectedOption.value : undefined

  const errorDisplay = useMemo(() => {
    if (!meta.touched) {
      return null
    }
    if (meta.error || error) {
      return meta.error || error
    }
    if (
      required &&
      (!meta.value || (Array.isArray(meta.value) && meta.value.length === 0))
    ) {
      return 'Required'
    }
    return null
  }, [error, required, meta])

  return (
    <Dropdown
      {...props}
      onChange={handleChange}
      label={props.label}
      value={selectedValue}
      valueRender={selectedLabel}
      required={required}
      error={errorDisplay}
      {...props}>
      {options.map(option => (
        <Dropdown.Option
          key={option[optionAttributes.key]}
          value={option[optionAttributes.value]}>
          {option[optionAttributes.label]}
        </Dropdown.Option>
      ))}
    </Dropdown>
  )
}

DropdownField.propTypes = {
  ...fieldShape,
  options: PropTypes.arrayOf(PropTypes.object),
  optionAttributes: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string
  })
}

DropdownField.defaultProps = {
  optionAttributes: {
    key: 'value',
    value: 'value',
    label: 'label'
  }
}
