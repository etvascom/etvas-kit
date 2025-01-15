import { FC, useCallback, useMemo } from 'react'

import { FieldHookConfig, useField, useFormikContext } from 'formik'

import { Dropdown, DropdownProps } from '../Dropdown'
import { OptionProps } from '../Dropdown/Option'

interface Props extends DropdownProps {
  options: OptionProps[]
  onFieldValueChange?: (value: string) => void
}

export const DropdownField: FC<Props & FieldHookConfig<any>> = ({
  options,
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
      return options.find(option => values.includes(option.id))
    }

    return options.find(option => field.value === option.value)
  }, [field, options, multiple])

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
      return selectedOption.label
    }

    return ''
  }

  const selectedLabel = valueRender || renderSelectedLabel

  const selectedValue = multiple
    ? field.value
    : selectedOption
      ? selectedOption.value
      : undefined

  const error = meta.touched && meta.error
  const displayedError =
    submitCount > 0 ? error : field.value !== 0 && field.value && error
  const mappedOptions = useMemo(
    () =>
      options.reduce(
        (mapped, option) => ({
          ...mapped,
          [option.value as string]: option.label
        }),
        []
      ),
    [options]
  )

  const filterItem =
    itemFilter ||
    ((search, value) =>
      typeof mappedOptions[value] === 'string'
        ? (mappedOptions[value] as string).toLocaleLowerCase().includes(search)
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
        <Dropdown.Option key={option.value} {...option}>
          {option.label}
        </Dropdown.Option>
      ))}
    </Dropdown>
  )
}
