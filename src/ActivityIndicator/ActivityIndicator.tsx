import React, { FC, useMemo } from 'react'
import { LoadBar } from './LoadBar'
import { RunningBar } from './RunningBar'
import { Spinner } from './Spinner'

interface ActivityIndicatorProps {
  variant?: typeof activityIndicators[number]
  colors?:
    | string[]
    | {
        primary: string
        background: string
      }
}

export const ActivityIndicator: FC<ActivityIndicatorProps> = ({
  variant = 'spinner',
  ...props
}) => {
  const Component: FC<any> = useMemo(() => {
    switch (variant) {
      case 'loadbar':
        return LoadBar
      case 'runningbar':
        return RunningBar
      default:
        return Spinner
    }
  }, [variant])

  return <Component {...props} />
}

const activityIndicators = ['spinner', 'loadbar', 'runningbar'] as const
