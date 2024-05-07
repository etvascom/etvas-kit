import React, { FC } from 'react'

import { Typography } from '..'
import { Flex } from '../Flex'
import RadioButton from './RadioButton'

interface Props {
  name: string
  label?: React.ReactNode
  value: any
  options: Option[]
  onChange: (value: any) => void
  noWrap?: boolean
}

interface Option {
  id: string
  name: string
  value: any
  label: React.ReactNode
  disabled?: boolean
}

const RadioButtons: FC<Props> = ({
  name,
  label,
  value,
  options,
  onChange,
  noWrap = false,
  ...props
}) => {
  const _handleOptionChange = (option: Option) => {
    onChange(option.value)
  }

  return (
    <>
      {label && (
        <Typography as='label' variant='labelSmall'>
          {label}
        </Typography>
      )}
      <Flex flexDirection={noWrap ? 'column' : 'row'} {...props}>
        {options.map(option => (
          <RadioButton
            key={option.value}
            value={option.value}
            id={option.id}
            name={option.name}
            checked={option.value === value}
            label={option.label}
            disabled={option.disabled}
            onChange={() => _handleOptionChange(option)}
          />
        ))}
      </Flex>
    </>
  )
}

RadioButtons.displayName = 'RadioButtons'

export default RadioButtons
