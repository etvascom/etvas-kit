import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const NavItem = ({ icon, label, isActive, as, onClick, ...props }) => {
  return (
    <Container
      as={as}
      onClick={onClick}
      alignItems='center'
      {...props}
      width={120}>
      <Icon name={icon} color={isActive ? 'brand' : 'outline'} size='18px' />
      <Typography
        variant='labelButton'
        truncate
        color={isActive ? 'brand' : 'outline'}
        mt={[1, 0]}>
        {label}
      </Typography>
    </Container>
  )
}

const Container = styled(Flex)(
  css({
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center'
  })
)

NavItem.propTypes = {
  as: PropTypes.elementType,
  label: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func
}
