import { useCallback, useMemo } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import { Dropdown } from '../Dropdown'
import { fieldShape } from './shapes'

export const DropdownField = ({
  options,
  optionAttributes,
  multiple,
  itemFilter,
  valueRender,
  onFieldValueChange,
  ...props
}) => {
  const { submitCount, errors } = useFormikContext()
  const [field, meta, helpers] = useField(props)

  const handleChange = useCallback(
    value => {
      helpers.setValue(value)
      onFieldValueChange && onFieldValueChange(value)
    },
    [helpers, onFieldValueChange]
  )

  const selectedOption = useMemo(() => {
    if (multiple) {
      const values = field.value ?? []
      return options.filter(option => values.includes(option.id))
    }

    return options.find(
      option => field.value === option[optionAttributes.value]
    )
  }, [field, options, optionAttributes, multiple])

  const renderSelectedLabel = value => {
    if (multiple) {
      const selectedOptions = options.filter(option =>
        value.includes(option.value)
      )
      const selectedOptionsLabel = `${selectedOptions
        .slice(0, 3)
        .map(opt => opt.label)
        .join(', ')}${
        selectedOptions.length > 3
          ? ` + ${selectedOptions.length - 3} more`
          : ''
      }`
      return selectedOptionsLabel
    }

    if (selectedOption) {
      return selectedOption[optionAttributes.label]
    }

    return ''
  }

  const selectedLabel = valueRender || renderSelectedLabel

  const selectedValue = multiple
    ? field.value
    : selectedOption
      ? selectedOption[optionAttributes.value]
      : undefined

  const error = meta.touched && meta.error
  const displayedError = submitCount > 0 ? error : field.value && error

  const mappedOptions = useMemo(
    () =>
      options.reduce(
        (mapped, option) => ({
          ...mapped,
          [option[optionAttributes.value]]: option[optionAttributes.label]
        }),
        []
      ),
    [options, optionAttributes]
  )

  const filterItem =
    itemFilter ||
    ((search, value) =>
      typeof mappedOptions[value] === 'string'
        ? mappedOptions[value].toLocaleLowerCase().includes(search)
        : false)

  return (
    <Dropdown
      onChange={handleChange}
      label={props.label}
      optionalText={props.optionalText}
      value={selectedValue}
      itemFilter={filterItem}
      error={displayedError}
      multiple={multiple}
      valueRender={selectedLabel}
      {...props}>
      {options.map(option => (
        <Dropdown.Option
          id={option[optionAttributes.id]}
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
  }),
  itemFilter: PropTypes.func,
  multiple: PropTypes.bool,
  valueRender: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onFieldValueChange: PropTypes.func
}

DropdownField.defaultProps = {
  optionalText: 'Optional',
  optionAttributes: {
    key: 'value',
    value: 'value',
    label: 'label',
    id: 'id'
  }
}
