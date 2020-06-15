import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '@ivoryio/kogaio'
import { NavItem } from './Item'

export const NavBar = ({ children }) => (
  <>
    <Container>{children}</Container>
    <Placeholder />
  </>
)

const Container = styled(Flex)(
  css({
    position: ['fixed', 'static'],
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: ['white', 'transparent'],
    borderBottom: ['1px solid', 'none'],
    color: 'outline',
    padding: [3, 0],
    justifyContent: ['space-between', 'flex-start']
  })
)

const Placeholder = styled.div(
  css({
    height: ['60px', 0]
  })
)

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
