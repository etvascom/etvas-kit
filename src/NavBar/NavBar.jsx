import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { NavItem } from './Item'

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

  return (
    <NavContainer hasPaddingY={isScrollable}>
      <NavItemsContainer ref={itemsContainer}>
        {items.map(item => (
          <ItemScrollableContainer
            isLastChild={item.idx === items.length - 1}
            isActive={activeIndex === item.idx}
            item={item}
            key={item.key}
            onClick={updateActiveIndex(item.idx)}
          />
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

const ItemScrollableContainer = ({ isActive, item, onClick, isLastChild }) => {
  const ref = useRef()

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }
  }, [isActive])

  return (
    <ItemContainer
      id={`nav-bar-item-${item.idx}`}
      isLastChild={isLastChild}
      className='nav-bar-item'
      key={item.key}
      ref={ref}
      onClick={onClick}>
      {item.component}
    </ItemContainer>
  )
}

ItemScrollableContainer.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.object,
  onClick: PropTypes.func,
  isLastChild: PropTypes.bool
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
