import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { compose, layout, position, space, variant } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { ActivityIndicator } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

import variants, { spinnerVariants } from './variants'

const Button = ({
  children,
  disabled,
  icon,
  id,
  loading,
  onClick,
  type,
  variant,
  ...rest
}) => (
  <StyledButton
    disabled={disabled}
    id={id}
    onClick={onClick}
    type={type}
    variant={variant}
    {...rest}>
    {loading ? (
      <ActivityIndicator
        colors={spinnerVariants[variant]}
        size='1.1rem'
        variant='spinner'
      />
    ) : (
      <Typography
        as='label'
        variant='labelButton'
        htmlFor={id}
        px={3}
        color='inherit'>
        {children}
      </Typography>
    )}
  </StyledButton>
)

const StyledButton = styled.button(
  css({
    alignItems: 'center',
    border: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '40px',
    minWidth: '160px',
    width: 'fit-content',
    label: {
      cursor: 'pointer'
    },
    ':hover': {
      opacity: 0.75
    },
    ':active ': {
      transform: 'scale(0.965)'
    },
    ':focus': {
      opacity: 0.75,
      outlineStyle: 'none',
      outlineColor: 'transparent'
    },
    ':disabled': {
      opacity: 0.3,
      transform: 'scale(1)',
      cursor: 'not-allowed'
    }
  }),

  compose(layout, position, space, variant({ variants }))
)

Button.propTypes = {
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.string)
  ])
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  spinnerSize: '1.5rem',
  type: 'button',
  variant: 'primary'
}

Button.displayName = 'Button'
export default Button
