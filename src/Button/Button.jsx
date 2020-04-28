import React from 'react'
import PropTypes from 'prop-types'
import { Button as KogaioButton } from '@ivoryio/kogaio'

const Button = ({ onClick, title, ...props }) => (
  <KogaioButton onClick={onClick} title={title} {...props} />
)

const buttonVariants = ['primary', 'outline', 'outline-alt', 'multi']
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(buttonVariants),
    PropTypes.objectOf(PropTypes.oneOf(buttonVariants))
  ])
}

export default Button
