import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const NavItem = ({ icon, label, isActive, as, onClick }) => {
  const color = isActive ? 'brand' : 'outline'

  return (
    <Container as={as} onClick={onClick} alignItems='center'>
      <Icon name={icon} color={color} size='18px' />
      <Typography
        as='span'
        variant='labelButton'
        color={color}
        ml={[0, 2]}
        mt={[1, 0]}>
        {label}
      </Typography>
    </Container>
  )
}

const Container = styled(Flex)(
  css({
    cursor: 'pointer',
    flexDirection: ['column', 'row'],
    marginLeft: [0, 12],
    '&:first-child': {
      marginLeft: 0
    }
  })
)

NavItem.propTypes = {
  as: PropTypes.elementType,
  label: PropTypes.node,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}
