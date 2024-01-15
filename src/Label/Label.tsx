import React, { FC } from 'react'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export interface LabelProps {
  label: React.ReactNode
  inputId?: string | number
  showOptionalText?: boolean
  optionalText?: React.ReactNode
  showTooltip?: boolean
}

export const Label: FC<LabelProps> = ({
  label,
  inputId,
  showOptionalText,
  optionalText = 'Optional',
  showTooltip
}) => {
  const tooltipIconId = `${inputId}-icon`
  return (
    <Flex mb={1} alignItems='center'>
      <Typography
        as='label'
        htmlFor={inputId?.toString()}
        variant='base12Bold'
        color='baseMetal'
        width='fit-content'>
        {label}
      </Typography>
      {inputId && showTooltip && (
        <Flex ml={1} alignItems='center' id={tooltipIconId}>
          <Icon
            name='information'
            color='baseMetal'
            size='small'
            opacity='.5'
            cursor='pointer'
          />
        </Flex>
      )}
      {showOptionalText && optionalText && (
        <Typography
          ml={1}
          as='label'
          htmlFor={inputId?.toString()}
          variant='base12Bold'
          color='baseGray'
          width='fit-content'>
          - {optionalText}
        </Typography>
      )}
    </Flex>
  )
}
