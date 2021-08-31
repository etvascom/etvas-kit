import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Touchable } from '../Touchable'
import { Icon } from '../Icon'
import sizes from '../assets/sizes'

export const PasswordToggler = ({
  error,
  inputType,
  tabIndex,
  onToggle,
  viewOption,
  ...props
}) => {
  const handleDown = useCallback(() => {
    onToggle && onToggle()
  }, [onToggle])

  const handleUp = useCallback(() => {
    if (viewOption.includes('peek')) {
      handleDown()
    }
  }, [viewOption, handleDown])

  return (
    <StyledTouchable
      effect='no-feedback'
      // onClick={handleDown}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchStart={onToggle}
      onTouchEnd={handleUp}
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
PasswordToggler.propTypes = {
  error: PropTypes.bool,
  inputType: PropTypes.string,
  tabIndex: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  viewOption: PropTypes.oneOf(toggleOptions)
}
