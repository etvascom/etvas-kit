import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, position, space, variant } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Typography } from '../Typography'
import { Flex, Space } from '../'
import variants, { spinnerVariants } from './variants'
import { Icon } from '../Icon'
import sizes from '../assets/sizes'

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
  // const iconColor = useMemo(() => {
  //   if (!icon || !iconPosition) {
  //     return null
  //   }
  //   if (disabled && variant === 'link') {
  //     return colors.disabled
  //   }
  //   // eslint-disable-next-line no-console
  //   console.info('we got so far ', {
  //     variant,
  //     iconVariant: iconVariants[variant]
  //   })
  //   return iconVariants[variant].color
  // }, [iconPosition, disabled, icon, variant])

  const hSpacing = useMemo(() => {
    if (!loading || variant.startsWith('link')) {
      return null
    }
    return variant === 'large' ? sizes.spacingNormal : sizes.spacingCompact
  }, [variant, loading])

  const hasLabel =
    !!children || (Array.isArray(children) && children.length > 0)

  return (
    <StyledButton
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
      variant={variant}
      hSpacing={hSpacing}
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
            <Space mr={hasLabel ? '10px' : '0'}>
              <Icon
                name={icon}
                size={variant === 'large' ? 'medium' : 'small'}
                color='inherit'
              />
            </Space>
          )}
          {hasLabel && (
            <Typography
              as='label'
              variant={variant === 'large' ? 'labelLargeButton' : 'labelButton'}
              htmlFor={id}
              color='inherit'>
              {children}
            </Typography>
          )}
          {icon && iconPosition === 'right' && (
            <Space ml='10px'>
              <Icon
                name={icon}
                size={variant === 'large' ? 'medium' : 'small'}
                color='inherit'
              />
            </Space>
          )}
        </Flex>
      )}
    </StyledButton>
  )
}

/*
compose(layout, position, space, variant({ variants })),
  ({loading}) => loading ? css({
    paddingLeft: '12px',
    paddingRight: '12px'
  })
  */

const StyledButton = styled.button`
  ${layout}
  ${position}
  ${space}
  ${variant({ variants })}
  ${({ hSpacing }) =>
    hSpacing ? `padding-left: ${hSpacing}; padding-right: ${hSpacing};` : ''}
`

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
  variant: 'primary',
  iconPosition: 'left'
}

Button.displayName = 'Button'
export default Button
