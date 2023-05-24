import React, { useMemo, useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { NavItem } from './Item'
import { Icon } from '../Icon'

const GRADIENT_SIZE = 32

export const NavBar = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrollable, setIsScrollable] = useState(false)
  const itemsContainer = useRef(null)

  const items = useMemo(
    () =>
      children
        ? children.map((child, idx) => ({
            key: `nav-item-${idx}`,
            component: child,
            idx
          }))
        : [],
    [children]
  )

  useLayoutEffect(() => {
    const windowResizeHandler = () => {
      const { current } = itemsContainer || {}
      const hasHorizontalScrollbar = current?.scrollWidth > current?.clientWidth
      setIsScrollable(hasHorizontalScrollbar)
    }

    windowResizeHandler()
    window.addEventListener('resize', windowResizeHandler, false)
    return () => window.removeEventListener('resize', windowResizeHandler)
  }, [])

  const updateActiveIndex = idx => () => {
    if (!children || !children.length || idx <= 0) {
      return setActiveIndex(0)
    }

    if (idx >= children.length - 1) {
      return setActiveIndex(children.length - 1)
    }
    setActiveIndex(idx)
  }

  useLayoutEffect(() => {
    document.getElementById(`nav-bar-item-${activeIndex}`).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  }, [activeIndex])

  return (
    <NavContainer hasPaddingY={isScrollable}>
      <NavItemsContainer ref={itemsContainer}>
        {items.map(item => (
          <ItemContainer
            id={`nav-bar-item-${item.idx}`}
            className='nav-bar-item'
            key={item.key}
            isLastChild={item.idx === items.length - 1}
            onClick={updateActiveIndex(item.idx)}>
            {item.component}
          </ItemContainer>
        ))}
      </NavItemsContainer>
      {isScrollable && (
        <>
          <Gradient from='left' onClick={updateActiveIndex(activeIndex + 1)}>
            <Icon name='chevronRight' size='medium' color='outline' />
          </Gradient>
          <Gradient from='right' onClick={updateActiveIndex(activeIndex - 1)}>
            <Icon name='chevronLeft' size='medium' color='outline' />
          </Gradient>
        </>
      )}
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${({ hasPaddingY }) => (hasPaddingY ? `${GRADIENT_SIZE}px` : '0')};
`
const NavItemsContainer = styled.div(
  css({
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    transition: 'left .5s ease-in-out',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    },
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */
  })
)

const Gradient = styled.button(
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    outline: 'none',
    border: 'none',
    left: 0,
    top: 0,
    bottom: 0,
    width: `${GRADIENT_SIZE}px`,
    background: 'transparent'
  }),
  ({ from }) =>
    from === 'right'
      ? ''
      : css({
          right: 0,
          left: 'auto'
        })
)

const ItemContainer = styled.button(
  css({
    appearance: 'none',
    margin: 0,
    border: 'none',
    background: 'none',
    outline: 'none'
  }),
  ({ isLastChild }) =>
    css({
      padding: isLastChild ? 0 : '0 32px 0 0'
    })
)

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Item = NavItem
