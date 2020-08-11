import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const NavItem = ({ icon, label, color, as, onClick, ...props }) => {
  return (
    <Container as={as} onClick={onClick} alignItems='center' {...props}>
      <Icon name={icon} color={color} size='18px' />
      <Typography
        maxWidth='120px'
        variant='labelButton'
        truncate
        color={color}
        ml={[2, 2]}
        mt={[1, 0]}>
        {label}
      </Typography>
    </Container>
  )
}

const Container = styled(Flex)(
  css({
    display: 'flex',
    minWidth: 'fit-content',
    cursor: 'pointer',
    paddingLeft: [8, 0],
    '&:last-child': {
      paddingRight: [4, 0]
    },
    marginLeft: [0, 6],
    '&:first-child': {
      paddingLeft: [4, 0]
    },
    'scroll-snap-align': 'start'
  })
)

NavItem.propTypes = {
  as: PropTypes.elementType,
  label: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func
}
