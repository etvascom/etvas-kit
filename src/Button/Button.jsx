import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, layout, position, space, variant } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { ActivityIndicator } from '@ivoryio/kogaio'
import { Typography } from '../Typography'
import { Flex, Space } from '../'
import variants, { iconVariants, spinnerVariants } from './variants'
import { Icon } from '../Icon'

const Button = ({
  children,
  disabled,
  iconFace,
  id,
  loading,
  onClick,
  type,
  variant,
  iconPosition,
  ...rest
}) => {
  let iconColor
  if (iconFace && iconPosition) {
    if (disabled && variant === 'link') {
      iconColor = 'brandDisabled'
    } else {
      iconColor = iconVariants[variant].color
    }
  }
  let spinnerColor = spinnerVariants[variant]
  if (loading && disabled && (variant === 'primary' || variant === 'large')) {
    spinnerColor = {
      background: 'brandDisabled',
      primary: 'white'
    }
  }

  return (<StyledButton
    disabled={disabled}
    id={id}
    onClick={onClick}
    type={type}
    variant={variant}
    {...rest}>
    {loading ? (
      <ActivityIndicator
        colors={spinnerColor}
        size='1.1rem'
        variant='spinner'
      />
    ) : (
      <Flex flexDirection={'row'} alignItems={'center'}>
        {(iconFace && iconPosition === 'left') &&
        <Space mr={'10px'}>
          <Icon name={iconFace} size={iconVariants[variant].fontSize} color={iconColor}/>
        </Space>
        }
        <Typography
          as='label'
          variant='labelButton'
          htmlFor={id}
          px={3}
          color='inherit'>
          {children}
        </Typography>
        {(iconFace && iconPosition === 'right') &&
        <Space ml={'10px'}>
          <Icon name={iconFace} size={iconVariants[variant].fontSize} color={iconColor}/>
        </Space>
        }
      </Flex>
    )}
  </StyledButton>)
}

const StyledButton = styled.button(
  compose(layout, position, space, variant({ variants }))
)

Button.propTypes = {
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  children: PropTypes.node,
  iconFace: PropTypes.string,
  iconPosition: PropTypes.oneOf([
    'left',
    'right'
  ]),
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
  iconFace: null,
  spinnerSize: '1.5rem',
  type: 'button',
  variant: 'primary'
}

Button.displayName = 'Button'
export default Button
