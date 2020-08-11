import React, { useMemo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

// import { Flex } from '@ivoryio/kogaio'
import { NavItem } from './Item'

const ITEM_WIDTH = 120
const GRADIENT_SIZE = 24

export const NavBar = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const main = useRef(null)

  const items = useMemo(
    () =>
      children
        ? children.map((child, idx) => ({
            key: `nav-item-${idx}`,
            idx: idx,
            component: child
          }))
        : [],
    [children]
  )

  const _scrollToItem = idx => () => {
    if (!children || !children.length || idx <= 0) {
      return setActiveIndex(0)
    }

    if (idx >= children.length - 1) {
      return setActiveIndex(children.length - 1)
    }
    setActiveIndex(idx)
  }

  const itemsContainerPosition = useMemo(() => {
    if (!children || !children.length) {
      return GRADIENT_SIZE
    }

    const innerWidth = children.length * ITEM_WIDTH

    const { width } = main.current?.getBoundingClientRect() || {}
    if ((width && width > innerWidth) || !width) {
      return GRADIENT_SIZE
    }

    let pos = width / 2 - ITEM_WIDTH / 2 - activeIndex * ITEM_WIDTH
    if (pos > GRADIENT_SIZE) {
      pos = GRADIENT_SIZE
    } else {
      console.info('we got', { width, innerWidth, pos })
    }
    if (width - innerWidth > pos) {
      pos = width - innerWidth - GRADIENT_SIZE
    }
    return pos

    // return GRADIENT_SIZE
  }, [activeIndex, children, main])

  return (
    <NavContainer ref={main}>
      <NavItemsContainer style={{ left: `${itemsContainerPosition}px` }}>
        {items.map(item => (
          <ItemContainer key={item.key} onClick={_scrollToItem(item.idx)}>
            {item.component}
          </ItemContainer>
        ))}
      </NavItemsContainer>
      <Gradient from='left' onClick={_scrollToItem(activeIndex + 1)} />
      <Gradient from='right' onClick={_scrollToItem(activeIndex - 1)} />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 2rem;
`
const NavItemsContainer = styled.div(
  css({
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    transition: 'left .5s ease-in-out'
  })
)

const Gradient = styled.button(
  css({
    position: 'absolute',
    outline: 'none',
    border: 'none',
    left: 0,
    top: 0,
    bottom: 0,
    width: `${GRADIENT_SIZE}px`,
    background:
      'linear-gradient(90deg, #FBFDFF 0%, rgba(251, 253, 255, 0.75) 50.52%, rgba(251, 253, 255, 0.35) 100%)'
  }),
  ({ from }) =>
    from === 'right'
      ? ''
      : css({
          transform: 'rotate(180deg)',
          right: 0,
          left: 'auto'
        })
)

const ItemContainer = styled.button`
  appearance: none;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
`

// const Container = styled(Flex)(
//   css({
//     position: ['fixed', 'static'],
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: ['white', 'transparent'],
//     color: 'outline',
//     padding: [3, 0],
//     justifyContent: ['space-between', 'flex-start'],
//     '@media (max-width: 600px)': { // change to md
//       overflowX: 'scroll',
//       overflowY: 'none',
//       'scroll-snap-type': 'x mandatory',
//       '::-webkit-scrollbar': {
//         width: 0,
//         background: 'transparent'
//       }
//     }
//   })
// )

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
