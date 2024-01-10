import React, { FC, useCallback } from 'react'

import styled from 'styled-components'

import { Icon } from '../Icon'
import { Touchable } from '../Touchable'
import sizes from '../assets/sizes'

interface Props {
  error?: boolean
  inputType: string
  tabIndex?: string
  onToggle: (event: any) => void
  onDrag: (event: any) => void
  viewOption: (typeof toggleOptions)[number]
}

export const PasswordToggler: FC<Props> = ({
  error,
  inputType,
  tabIndex,
  onToggle,
  onDrag,
  viewOption,
  ...props
}) => {
  const handleDown = useCallback(
    (event: any) => {
      onToggle && onToggle(event)
    },
    [onToggle]
  )

  const handleUp = useCallback(
    (event: any) => {
      if (viewOption.includes('peek')) {
        handleDown(event)
      }
    },
    [viewOption, handleDown]
  )

  return (
    <StyledTouchable
      effect='no-feedback'
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchStart={onToggle}
      onTouchEnd={handleUp}
      onDrag={onDrag}
      tabIndex={tabIndex}>
      <Icon
        color='inputIcon'
        size='small'
        name={inputType === 'password' ? 'eye' : 'eyeNo'}
        {...props}
      />
    </StyledTouchable>
  )
}

const StyledTouchable = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${sizes.buttonMinWidth};
  height: ${sizes.buttonMinWidth};
`

const toggleOptions = ['peek', 'toggle']
