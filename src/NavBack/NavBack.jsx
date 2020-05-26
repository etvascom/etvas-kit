import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Icon, Typography } from '@ivoryio/kogaio'

import style from './NavBack.style'

const NavBack = ({
  iconName = 'arrow_drop_down_circle',
  textContent,
  ...props
}) => (
  <StyledLink {...props}>
    <Icon name={iconName} />
    <Typography as='span' variant='labelSmall' color='outline' ml={2}>
      {textContent}
    </Typography>
  </StyledLink>
)

const StyledLink = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)(css(style))

NavBack.propTypes = {
  iconName: PropTypes.string,
  textContent: PropTypes.string,
  props: PropTypes.shape({
    to: PropTypes.string,
    component: PropTypes.func
  })
}

export default NavBack
