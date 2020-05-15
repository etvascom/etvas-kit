import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { color, flexbox } from 'styled-system'

import style from './Modal.style'

import { Box } from '@ivoryio/kogaio'

const ModalStyle = styled(Box)(
  css(style.wrapper),
  color,
  flexbox,
  color,
  ({ animated }) => `
    @keyframes modal{
        from { opacity: 0; }
        to { opacity: 100%; }
    }
    
    ${animated &&
      ` animation-fill-mode: forwards;
        animation-name: modal;
        animation-duration:0.5s; `}
`
)

const disableScroll = () => (document.body.style.overflow = 'hidden')
const enamleScroll = () => (document.body.style.overflow = 'auto')

export const Modal = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  children,
  elType,
  ...props
}) => {
  const modalRef = useRef()

  const modalClickHandler = event => {
    if (event.target === modalRef.current) {
      onBackDropClick()
    }
  }

  const callback = event => {
    if (event.keyCode === 27) {
      onEscape()
    }
  }
  useLayoutEffect(() => {
    disableScroll()
    window.addEventListener('keyup', callback, false)

    return () => {
      enamleScroll()
      window.removeEventListener('keyup', callback, false)
    }
  })

  return (
    <ModalStyle
      ref={modalRef}
      {...props}
      elType={elType}
      bg={backDrop}
      animated={animated}
      onClick={modalClickHandler}>
      {children}
    </ModalStyle>
  )
}

Modal.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.color,
  backDrop: PropTypes.string,
  onBackDropClick: PropTypes.func,
  onEscape: PropTypes.func,
  animated: PropTypes.bool,
  children: PropTypes.node,
  elType: PropTypes.string
}

Modal.displayName = 'Modal'
