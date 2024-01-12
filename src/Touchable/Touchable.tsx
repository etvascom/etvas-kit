import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react'
import React from 'react'

import styled, { css } from 'styled-components'
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system'

import { themed } from '../utils'

type Effect = (typeof effects)[number]

export interface TouchableProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {
  activeOpacity?: number | string
  effect: Effect
  underlayColor?: string
}

export const Touchable: FC<PropsWithChildren<TouchableProps>> = ({
  activeOpacity = 0.75,
  children,
  disabled = false,
  effect = 'no-feedback',
  onClick,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onDrag: handleDrag,
  tabIndex,
  underlayColor,
  type = 'button',
  ...rest
}) => {
  const [isBeingPressed, setIsBeingPressed] = useState(false)

  const _handleMouseDown = useCallback(
    (event: any) => {
      setIsBeingPressed(true)
      typeof onMouseDown === 'function' && onMouseDown(event)
    },
    [onMouseDown, setIsBeingPressed]
  )

  const _handleMouseUp = useCallback(
    (event: any) => {
      setIsBeingPressed(false)
      typeof onMouseUp === 'function' && onMouseUp(event)
    },
    [onMouseUp, setIsBeingPressed]
  )

  const _handleMouseLeave = useCallback(
    (event: any) => {
      if (isBeingPressed && typeof handleDrag === 'function') {
        return handleDrag(event)
      }
    },
    [handleDrag, isBeingPressed]
  )

  const touchableEffect = useMemo(
    () => (disabled ? 'no-feedback' : effect),
    [disabled, effect]
  )

  return (
    <Wrapper
      activeOpacity={activeOpacity}
      disabled={disabled}
      effect={touchableEffect}
      onClick={onClick}
      onMouseDown={onClick ? undefined : _handleMouseDown}
      onMouseUp={onClick ? undefined : _handleMouseUp}
      onTouchStart={onClick ? undefined : onTouchStart}
      onTouchEnd={onClick ? undefined : onTouchEnd}
      onMouseLeave={_handleMouseLeave}
      tabIndex={Number(tabIndex)}
      type={type}
      underlayColor={underlayColor}
      {...rest}>
      {children}
    </Wrapper>
  )
}

const touchableWithEffect = ({
  effect,
  activeOpacity,
  underlayColor
}: WrapperProps) => {
  switch (effect) {
    case 'opacity':
      return css`
        &:hover,
        &:active {
          opacity: ${activeOpacity};
        }
      `
    case 'highlight':
      return css`
        &:hover {
          background-color: ${themed(`colors.${underlayColor}`, underlayColor)};
          color: ${themed('colors.baseWhite')};
        }
        &:active {
          background-color: ${themed(`colors.${underlayColor}`, underlayColor)};
          color: ${themed('colors.baseWhite')};
        }
      `
    default:
      return css`
        &:active {
          transform: scale(1);
        }
      `
  }
}

type WrapperProps = Pick<
  TouchableProps,
  'effect' | 'activeOpacity' | 'underlayColor'
>

const Wrapper = styled.button<WrapperProps>`
  background: transparent;
  border: none;
  box-shadow: none;
  font-size: inherit;
  margin: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.985);
  }

  ${compose(border, color, flexbox, layout, position, space, typography)};
  ${touchableWithEffect};
`

export const effects = ['opacity', 'highlight', 'no-feedback'] as const
