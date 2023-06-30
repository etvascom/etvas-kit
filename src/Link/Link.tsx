import React, { FC } from 'react'
import styled from 'styled-components'
import css, { SystemStyleObject } from '@styled-system/css'

import { typography } from '../Typography'
import { compose } from 'styled-system'

const styles = {
  textDecoration: 'inherit',
  color: 'brand',
  font: 'inherit',
  lineHeight: 'inherit'
}

interface LinkProps {
  component?: React.ElementType
  variant?: 'text' | 'button'
}

export const Link: FC<LinkProps> = ({ component, variant, ...props }) => (
  <Wrapper {...props} as={component} variant={variant} />
)

const Wrapper = styled.a(
  compose(css(styles), ({ variant }) =>
    variant === 'button' ? css(typography.labelButton as SystemStyleObject) : {}
  )
)

Link.defaultProps = {
  variant: 'text',
  component: 'a'
}
