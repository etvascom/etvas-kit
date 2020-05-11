import React from 'react'
import PropTypes from 'prop-types'
import { Button as KogaioButton } from '@ivoryio/kogaio'

const Button = ({ onClick, title, ...props }) => (
  <KogaioButton onClick={onClick} title={title} {...props} />
)

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  onClick: PropTypes.func,
  title: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
}

Button.displayName = 'Button'
export default Button
