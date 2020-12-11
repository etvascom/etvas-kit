import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Touchable } from '@ivoryio/kogaio'
import { Icon } from '../Icon'

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
    <Touchable
      effect='no-feedback'
      // onClick={handleDown}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchStart={onToggle}
      onTouchEnd={handleUp}
      tabIndex={tabIndex}>
      <Icon
        color='inputIcon'
        size={3}
        name={inputType === 'password' ? 'eye' : 'eyeNo'}
        {...props}
      />
    </Touchable>
  )
}

const toggleOptions = ['peek', 'toggle']
PasswordToggler.propTypes = {
  error: PropTypes.bool,
  inputType: PropTypes.string,
  tabIndex: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  viewOption: PropTypes.oneOf(toggleOptions)
}
