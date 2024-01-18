import React, { FC, useCallback, useMemo } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { Dropdown, DropdownProps } from '../Dropdown'

interface Props extends DropdownProps {
  options: any[]
  optionAttributes: {
    key: string
    value: string
    label: string
    id: string
  }
  onFieldValueChange?: (value: string) => void
}

export const DropdownField: FC<Props & FieldHookConfig<any>> = ({
  options,
  optionAttributes = defaultOptionAttributes,
  multiple,
  itemFilter,
  valueRender,
  onFieldValueChange,
  optionalText = 'Optional',
  ...props
}) => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)

  const handleChange = useCallback(
    (value: any) => {
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

  const renderSelectedLabel = (value: any) => {
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
      optionalText={optionalText}
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

const defaultOptionAttributes = {
  key: 'value',
  value: 'value',
  label: 'label',
  id: 'id'
}
