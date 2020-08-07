import React, { useMemo, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '@ivoryio/kogaio'
import { NavItem } from './Item'

export const NavBar = ({ children }) => {
  const content = useMemo(() => {
    if (!children.length) {
      return null
    }

    const len = children.length
    const w = `${100 / len}%`

    return Array.from(children).map(child =>
      cloneElement(child, { maxWidth: w })
    )
  }, [children])

  return <Container>{content}</Container>
}

// mobile NavBar which is shown on the bottom could be covered by browser navigation

const Container = styled(Flex)(
  css({
    position: ['fixed', 'static'],
    top: ['unset', 0],
    left: 0,
    right: 0,
    bottom: [0, 'unset'],
    backgroundColor: ['white', 'transparent'],
    borderTop: ['1px solid', 'none'],
    borderBottom: ['1px solid', 'none'],
    color: 'outline',
    padding: [3, 0],
    justifyContent: ['space-between', 'flex-start']
  })
)

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
