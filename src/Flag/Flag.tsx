import { FC } from 'react'

import { Space, SpaceProps } from '../Space'

interface Props extends SpaceProps {
  name: string
}

export const Flag: FC<Props> = ({ name, ...rest }) => (
  <Space {...rest}>
    <span
      className={`flag-icon flag-icon-${name.substring(0, 2).toLowerCase()}`}
    />
  </Space>
)
