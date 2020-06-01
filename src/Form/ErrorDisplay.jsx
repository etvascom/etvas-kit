import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Typography } from '../Typography'
import { Icon } from '../Icon'
import { Flex } from '@ivoryio/kogaio'

export const ErrorDisplay = ({ name, type }) => {
  const [field, meta] = useField({
    type,
    name
  })

  if (!meta.error) {
    return null
  }

  return (
    <Flex alignItems='center' justifyContent='flex-start'>
      <Icon name='alertCircle' color='error' size='12px' />
      <Typography variant='textSmall' color='error' ml={2}>
        {meta.error}
      </Typography>
    </Flex>
  )
}

ErrorDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox', 'text'])
}

ErrorDisplay.defaultProps = {
  type: 'text'
}
