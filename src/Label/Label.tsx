import React, { FC } from 'react'
import { Box } from '../Box'
import { Typography } from '../Typography'

interface LabelProps {
  inputId?: string
  label?: React.ReactNode
  showOptionalText?: boolean
  optionalText?: React.ReactNode
}

export const Label: FC<LabelProps> = ({
  label,
  inputId,
  showOptionalText,
  optionalText = 'Optional'
}) => (
  <Box mb={1}>
    <Typography
      as='label'
      htmlFor={inputId}
      variant='base12Bold'
      color='baseMetal'
      width='fit-content'>
      {label}
    </Typography>
    {showOptionalText && optionalText && (
      <Typography
        ml={1}
        as='label'
        htmlFor={inputId}
        variant='base12Bold'
        color='baseGray'
        width='fit-content'>
        - {optionalText}
      </Typography>
    )}
  </Box>
)
