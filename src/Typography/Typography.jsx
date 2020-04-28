import React from 'react'
import PropTypes from 'prop-types'

import { Typography as KogaioTypography } from '@ivoryio/kogaio'

const Typography = ({ children, ...props }) => <KogaioTypography {...props}>{children}</KogaioTypography>

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default Typography
