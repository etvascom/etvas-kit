import React, { FC, ReactNode, useMemo } from 'react'
import styled from 'styled-components'
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  layout,
  position,
  space,
  variant
} from 'styled-system'

import { Typography } from '../Typography'
import { Flex, Space } from '..'
import variants from './variants'
import { Icon } from '../Icon'
import sizes from '../assets/sizes'
import colors from '../assets/colors'
import { brandingService } from '../providers/BrandingService'

interface ButtonProps extends LayoutProps, PositionProps, SpaceProps {
  id?: string
  children?: ReactNode
  iconColor?: string
  color?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: keyof ReturnType<typeof variants>
  spinnerSize?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  iconColor = 'currentColor',
  color,
  children,
  disabled = false,
  icon = null,
  id,
  loading,
  onClick,
  type = 'button',
  variant = 'primary',
  iconPosition = 'left',
  spinnerSize = '1.5rem',
  ...rest
}) => {
  const hSpacing = useMemo(() => {
    if (!loading || variant.startsWith('link')) {
      return null
    }
    return variant === 'large' ? sizes.spacingNormal : sizes.spacingCompact
  }, [variant, loading])

  const hasLabel =
    !!children || (Array.isArray(children) && children.length > 0)

  const colorVariants = useMemo(
    () =>
      color
        ? {
            ...brandingService.buildColorVariants(
              'button',
              colors[color as keyof typeof colors] ?? color,
              {}
            ),
            buttonColor: color
          }
        : {},
    [color]
  )

  return (
    <StyledButton
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
      variant={variant}
      hSpacing={hSpacing}
      colorVariants={colorVariants}
      spinnerSize={spinnerSize}
      {...rest}>
      {loading ? (
        <Icon size='medium' name='loading' spin color={iconColor} />
      ) : (
        <Flex flexDirection='row' alignItems='center'>
          {icon && iconPosition === 'left' && (
            <Space mr={hasLabel ? '10px' : '0'}>
              <Icon
                name={icon}
                size={variant === 'large' ? 'medium' : 'small'}
                color={iconColor}
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
                color={iconColor}
              />
            </Space>
          )}
        </Flex>
      )}
    </StyledButton>
  )
}

interface StyledButtonProps {
  hSpacing: string | null
  variant: string
  colorVariants: Record<string, string>
  spinnerSize: string
}

const StyledButton = styled.button<StyledButtonProps>`
  ${layout}
  ${position}
  ${space}
  ${props => variant({ variants: variants(props) })(props)}
  ${({ hSpacing }) =>
    hSpacing ? `padding-left: ${hSpacing}; padding-right: ${hSpacing};` : ''}
`

Button.displayName = 'Button'
export default Button
