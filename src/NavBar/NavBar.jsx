import React, { useMemo, cloneElement, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '@ivoryio/kogaio'
import { NavItem } from './Item'

export const NavBar = ({ children }) => {
  // const color = isActive ? 'brand' : 'outline'
  const [activeIndex, setActiveIndex] = useState(0)
  // map array in a new component
  const content = useMemo(() => {
    if (!children.length) {
      return null
    }

    const len = children.length
    const w = `${100 / len}%`

    return Array.from(children).map((child, idx) => )
  }, [children])

  return (
    <Container>
      {content.map(item => { 
        item.child
      })}
    </Container>
  )
}

const Container = styled(Flex)(
  css({
    position: ['fixed', 'static'],
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: ['white', 'transparent'],
    color: 'outline',
    padding: [3, 0],
    justifyContent: ['space-between', 'flex-start'],
    '@media (max-width: 600px)': { // change to md
      overflowX: 'scroll',
      overflowY: 'none',
      'scroll-snap-type': 'x mandatory',
      '::-webkit-scrollbar': {
        width: 0,
        background: 'transparent'
      }
    }
  })
)

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
