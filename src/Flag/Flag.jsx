import React from 'react'

import PropTypes from 'prop-types'

import { Space } from '../Space'

export const Flag = ({ name, ...rest }) => (
  <Space {...rest}>
    <span
      className={`flag-icon flag-icon-${name.substring(0, 2).toLowerCase()}`}
    />
  </Space>
)

Flag.propTypes = {
  name: PropTypes.string
}
