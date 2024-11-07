import { FC } from 'react'

import { VariantProp } from '../utils/types'
import { LoadBar } from './LoadBar'
import { RunningBar } from './RunningBar'
import { Spinner } from './Spinner'

export interface Colors {
  background: string
  primary: string
}

type VariantKey = (typeof activityIndicators)[number]

interface Props {
  colors?: string[] | Colors
  variant?: VariantProp<VariantKey>
  size?: string | number
}

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
  return <Spinner colors={colors as Colors} size={size} {...props} />
}

const activityIndicators = ['spinner', 'loadbar', 'runningbar']

ActivityIndicator.defaultProps = {
  variant: 'spinner'
}
