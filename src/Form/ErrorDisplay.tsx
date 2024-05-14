import React, { FC } from 'react'

import { useField } from 'formik'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

interface ErrorDisplayProps {
  name: string
  type?: 'radio' | 'checkbox' | 'text'
}

export const ErrorDisplay: FC<ErrorDisplayProps> = ({
  name,
  type = 'text'
}) => {
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
