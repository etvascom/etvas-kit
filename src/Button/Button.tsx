import React, {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useMemo
} from 'react'

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

import { Flex, Space } from '..'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import colors from '../assets/colors'
import sizes from '../assets/sizes'
import { brandingService } from '../providers/BrandingService'
import { VariantProp } from '../utils/types'
import variants from './variants'

const defaultVariants = variants({ colorVariants: {} })
type VariantKey = keyof typeof defaultVariants

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    LayoutProps,
    PositionProps,
    SpaceProps {
  iconColor?: string
  color?: keyof typeof colors
  icon?: string
  loading?: boolean
  variant: VariantProp<VariantKey>
  iconPosition?: 'left' | 'right'
}

const Button: FC<PropsWithChildren<Props>> = ({
  iconColor = 'currentColor',
  color,
  children,
  disabled = false,
  icon,
  id,
  loading = false,
  onClick,
  type = 'button',
  variant = 'primary',
  iconPosition = 'left',
  ...rest
}) => {
  const hSpacing = useMemo(() => {
    if (!loading || variant.toString().startsWith('link')) {
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
              colors[color] ?? color,
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
      hSpacing={Number(hSpacing) || 0}
      colorVariants={colorVariants}
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
  hSpacing: number
  variant: Props['variant']
  colorVariants: object
}

const StyledButton = styled.button<StyledButtonProps>`
  ${props => variant({ variants: variants(props) })(props)}
  ${({ hSpacing }) =>
    hSpacing ? `padding-left: ${hSpacing}; padding-right: ${hSpacing};` : ''}
  ${layout}
  ${position}
  ${space}
`
Button.displayName = 'Button'
export default Button
