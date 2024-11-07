import React, {
  AnchorHTMLAttributes,
  ElementType,
  FC,
  PropsWithChildren
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { typography } from '../Typography'

const styles = {
  textDecoration: 'inherit',
  color: 'brand',
  font: 'inherit',
  lineHeight: 'inherit'
}

interface LinkProps
  extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  component?: ElementType
  variant?: 'text' | 'button'
}

export const Link: FC<LinkProps> = ({
  component = 'a',
  variant = 'text',
  children,
  ...props
}) => (
  <Wrapper {...props} as={component} variant={variant}>
    {children}
  </Wrapper>
)

const Wrapper = styled.a<LinkProps>(css(styles), ({ variant }) =>
  variant === 'button' ? css(typography.labelButton as any) : {}
)
