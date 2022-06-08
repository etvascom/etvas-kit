import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Box'
import { Typography } from '../Typography'

export const Label = ({ label, inputId, showOptionalText, optionalText }) => (
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

Label.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.node,
  showOptionalText: PropTypes.bool,
  optionalText: PropTypes.node
}

Label.defaultProps = {
  optionalText: 'Optional'
}
