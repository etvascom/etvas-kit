import React from 'react'
import PropTypes from 'prop-types'
import { Button as KogaioButton } from '@ivoryio/kogaio'

const Button = ({ onClick, title, ...props }) => (
  <KogaioButton onClick={onClick} title={title} {...props} />
)

const buttonVariants = ['primary', 'outline', 'outline-alt', 'link']
Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(buttonVariants),
    PropTypes.objectOf(PropTypes.oneOf(buttonVariants))
  ])
}

export default Button
