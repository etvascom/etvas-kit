import React, { FC } from 'react'

import { LoadBar } from './LoadBar'
import { RunningBar } from './RunningBar'
import { Spinner } from './Spinner'

interface Colors {
  background: string
  primary: string
}

interface Props {
  colors?: string[] | Colors
  variant?: (typeof activityIndicators)[number]
  size?: string | number
}

/**
 * spinner, runningbar -> colors: { background: '', primary: '' };
 *
 * loadbar -> colors: String[]
 */

export const ActivityIndicator: FC<Props> = ({
  variant,
  colors,
  size,
  ...props
}) => {
  if (variant === 'loadbar') {
    return <LoadBar colors={colors as string[]} {...props} />
  }
  if (variant === 'runningbar') {
    return <RunningBar colors={colors as Colors} {...props} />
  }
  return (
    <Spinner
      colors={colors as Colors}
      size={size as string | number}
      {...props}
    />
  )
}

const activityIndicators = ['spinner', 'loadbar', 'runningbar']

ActivityIndicator.defaultProps = {
  variant: 'spinner'
}
