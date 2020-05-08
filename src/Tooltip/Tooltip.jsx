import React from 'react'
import PropTypes from 'prop-types'

import { Tooltip as KogaioTooltip } from '@ivoryio/kogaio'

const Tooltip = ({ children, ...props }) => (
  <KogaioTooltip {...props}>{children}</KogaioTooltip>
)

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ]),
  arrow: PropTypes.shape({
    alignment: PropTypes.string,
    direction: PropTypes.string
  }),
  visible: PropTypes.bool,
  width: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  })
}

Tooltip.defaultProps = {
  visible: true
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
