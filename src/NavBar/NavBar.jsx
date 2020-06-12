import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '@ivoryio/kogaio'
import { NavItem } from './Item'

export const NavBar = ({ children }) => <Container>{children}</Container>

const Container = styled(Flex)(
  css({
    position: ['fixed', 'static'],
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: ['white', 'transparent'],
    borderTop: ['1px solid', 'none'],
    color: 'outline',
    padding: [3, 0],
    justifyContent: ['space-between', 'flex-start']
  })
)

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
