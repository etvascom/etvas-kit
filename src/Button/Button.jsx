import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, layout, position, space, variant } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Typography } from '../Typography'
import { Flex, Space } from '../'
import variants, { iconVariants, spinnerVariants } from './variants'
import { Icon } from '../Icon'
import colors from '../assets/colors'

const Button = ({
  children,
  disabled,
  icon,
  id,
  loading,
  onClick,
  type,
  variant,
  iconPosition,
  ...rest
}) => {
  const iconColor = useMemo(() => {
    if (!icon || !iconPosition) {
      return null
    }
    if (disabled && variant === 'link') {
      return colors.disabled
    }
    return iconVariants[variant].color
  }, [iconPosition, disabled, icon, variant])

  return (
    <StyledButton
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
      variant={variant}
      {...rest}>
      {loading ? (
        <Icon
          size='medium'
          name='loading'
          color={spinnerVariants[variant].primary}
          rotate={true}
        />
      ) : (
        <Flex flexDirection='row' alignItems='center'>
          {icon && iconPosition === 'left' && (
            <Space mr='10px'>
              <Icon
                name={icon}
                size={iconVariants[variant].size}
                color={iconColor}
              />
            </Space>
          )}
          <Typography
            as='label'
            variant={variant === 'large' ? 'labelLargeButton' : 'labelButton'}
            htmlFor={id}
            color='inherit'>
            {children}
          </Typography>
          {icon && iconPosition === 'right' && (
            <Space ml='10px'>
              <Icon
                name={icon}
                size={iconVariants[variant].size}
                color={iconColor}
              />
            </Space>
          )}
        </Flex>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button(
  compose(layout, position, space, variant({ variants }))
)

Button.propTypes = {
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  children: PropTypes.node,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
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
  icon: null,
  spinnerSize: '1.5rem',
  type: 'button',
  variant: 'primary'
}

Button.displayName = 'Button'
export default Button
