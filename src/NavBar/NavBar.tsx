import {
  ButtonHTMLAttributes,
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { NavItem } from './Item'

const GRADIENT_SIZE = 32

interface NavBarSubComponents {
  Item: typeof NavItem
}

const NavBar: FC<PropsWithChildren> & NavBarSubComponents = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isScrollable, setIsScrollable] = useState<boolean>(false)
  const itemsContainer = useRef<HTMLDivElement>(null)

  const items = useMemo(
    () =>
      children
        ? Children.toArray(children).map((child, idx) => ({
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
      if (current?.scrollWidth && current?.clientWidth) {
        const hasHorizontalScrollbar = current.scrollWidth > current.clientWidth
        setIsScrollable(hasHorizontalScrollbar)
      }
    }

    windowResizeHandler()
    window.addEventListener('resize', windowResizeHandler, false)
    return () => window.removeEventListener('resize', windowResizeHandler)
  }, [])

  const updateActiveIndex = (idx: number) => () => {
    const length = Children.toArray(children).length
    if (!children || !length || idx <= 0) {
      return setActiveIndex(0)
    }

    if (idx >= length - 1) {
      return setActiveIndex(length - 1)
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

interface NavContainerProps {
  hasPaddingY: boolean
}

const NavContainer = styled.div<NavContainerProps>`
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
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */
  } as any)
)

interface ItemScrollableContainerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
  item: {
    key: string
    component: ReactNode
    idx: number
  }
  isLastChild: boolean
}

const ItemScrollableContainer: FC<ItemScrollableContainerProps> = ({
  isActive,
  item,
  onClick,
  isLastChild
}) => {
  const ref = useRef<HTMLButtonElement>(null)

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

const ItemContainer = styled.button<
  Pick<ItemScrollableContainerProps, 'isLastChild'>
>(
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

interface GradientProps {
  from: 'right' | 'left'
}

const Gradient = styled.button<GradientProps>(
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

NavBar.Item = NavItem

export default NavBar
