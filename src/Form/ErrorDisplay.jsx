import React from 'react'

import { useField } from 'formik'
import PropTypes from 'prop-types'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const ErrorDisplay = ({ name, type }) => {
  const [, meta] = useField({
    type,
    name
  })

  if (!(meta.touched && meta.error)) {
    return null
  }

  return (
    <Flex alignItems='center' justifyContent='flex-start'>
      <Icon name='alertCircle' color='error' size='small' />
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
