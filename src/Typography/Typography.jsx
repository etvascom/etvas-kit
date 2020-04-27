import React from 'react'
import { Typography as KogaioTypography } from '@ivoryio/kogaio'

const Typography = ({ children, ...props }) => {
  return <KogaioTypography {...props}>{children}</KogaioTypography>
}

export default Typography
