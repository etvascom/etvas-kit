import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const NavItem = ({ icon, label, isActive, as, onClick, ...props }) => (
  <Container as={as} onClick={onClick} alignItems='center' {...props}>
    <Icon name={icon} color={isActive ? 'accent' : 'outline'} size='18px' />
    <Typography
      variant='labelButton'
      truncate
      color={isActive ? 'accent' : 'outline'}
      ml={2}>
      {label}
    </Typography>
  </Container>
)

const Container = styled(Flex)(
  css({
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'flex-start'
  })
)

NavItem.propTypes = {
  as: PropTypes.elementType,
  label: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
