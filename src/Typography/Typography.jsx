import React from 'react'
import PropTypes from 'prop-types'

import { Typography as KogaioTypography } from '@ivoryio/kogaio'

const Typography = ({ children, ...props }) => (
  <KogaioTypography {...props}>{children}</KogaioTypography>
)

Typography.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  truncate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
}

Typography.defaultProps = {
  as: 'div'
}

Typography.displayName = 'Typography'
export default Typography
