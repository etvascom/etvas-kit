import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Space } from '../Space'

interface FlagProps {
  name: string
}

export const Flag: FC<FlagProps> = ({ name, ...rest }) => (
  <Space {...rest}>
    <span
      className={`flag-icon flag-icon-${name.substring(0, 2).toLowerCase()}`}
    />
  </Space>
)
