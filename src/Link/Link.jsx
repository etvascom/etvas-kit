import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'

const styles = {
  textDecoration: 'inherit',
  color: 'brand',
  font: 'inherit',
  lineHeight: 'inherit'
}

export const Link = ({ component, variant, ...props }) => (
  <Wrapper {...props} as={component} variant={variant} />
)

const Wrapper = styled.a(css(styles), ({ variant }) =>
  variant === 'button' ? css(typography.labelButton) : {}
)

Link.propTypes = {
  component: PropTypes.elementType,
  variant: PropTypes.oneOf(['text', 'button'])
}

Link.defaultProps = {
  variant: 'text',
  component: 'a'
}
