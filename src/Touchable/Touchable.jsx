import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themed } from '../utils'

export const Touchable = ({
  activeOpacity,
  as,
  children,
  disabled,
  effect,
  onClick,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onDrag: handleDrag,
  tabIndex,
  underlayColor,
  type,
  ...rest
}) => {
  const [isBeingPressed, setIsBeingPressed] = useState(false)

  const _handleMouseDown = useCallback(
    ev => {
      setIsBeingPressed(true)
      typeof onMouseDown === 'function' && onMouseDown(ev)
    },
    [onMouseDown, setIsBeingPressed]
  )

  const _handleMouseUp = useCallback(
    ev => {
      setIsBeingPressed(false)
      typeof onMouseUp === 'function' && onMouseUp(ev)
    },
    [onMouseUp, setIsBeingPressed]
  )

  const _handleMouseLeave = useCallback(() => {
    if (isBeingPressed && typeof handleDrag === 'function') {
      return handleDrag()
    }
  }, [handleDrag, isBeingPressed])

  const touchableEffect = useMemo(() => (disabled ? 'no-feedback' : effect), [
    disabled,
    effect
  ])

  return (
    <Wrapper
      activeOpacity={activeOpacity}
      as={as}
      disabled={disabled}
      effect={touchableEffect}
      onClick={onClick}
      onMouseDown={onClick ? null : _handleMouseDown}
      onMouseUp={onClick ? null : _handleMouseUp}
      onMouseLeave={_handleMouseLeave}
      onTouchStart={onClick ? null : onTouchStart}
      onTouchEnd={onClick ? null : onTouchEnd}
      tabIndex={tabIndex}
      type={type}
      underlayColor={underlayColor}
      {...rest}>
      {children}
    </Wrapper>
  )
}

const touchableWithEffect = ({ effect, activeOpacity, underlayColor }) => {
  switch (effect) {
    case 'opacity':
      return css`
        :hover,
        :active {
          opacity: ${activeOpacity};
        }
      `
    case 'highlight':
      return css`
        :hover {
          background-color: ${themed(`colors.${underlayColor}`, underlayColor)};
          color: ${themed('colors.baseWhite')};
        }
        :active {
          color: ${themed('colors.baseWhite')};
          background-color: ${themed(`colors.${underlayColor}`, underlayColor)};
        }
      `
    default:
      return css`
        :active {
          transform: scale(1);
        }
      `
  }
}

const Wrapper = styled.button`
  background: transparent;
  border: none;
  box-shadow: none;
  font-size: inherit;
  margin: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.985);
  }

  ${compose(border, color, flexbox, layout, position, space, typography)};
  ${touchableWithEffect};
`

export const effects = ['opacity', 'highlight', 'no-feedback']

Touchable.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
  activeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  effect: PropTypes.oneOf(effects).isRequired,
  onClick: PropTypes.func,
  onDrag: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  underlayColor: PropTypes.string
}

Touchable.defaultProps = {
  activeOpacity: 0.75,
  disabled: false,
  effect: 'no-feedback',
  type: 'button'
}
