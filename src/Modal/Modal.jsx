import React, { useLayoutEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { color } from 'styled-system'

import style from './Modal.style'
import { ModalContent } from './ModalContent'

import { Box } from '@ivoryio/kogaio'

const StyledModal = styled(Box)(
  css(style.wrapper),
  color,
  ({ animated }) =>
    animated &&
    `@keyframes modal {
        from { opacity: 0; }
        to { opacity: 100%; }
    }
    animation-fill-mode: forwards;
    animation-name: modal;
    animation-duration:0.5s;`
)

const disableScroll = () => (document.body.style.overflow = 'hidden')
const enableScroll = () => (document.body.style.overflow = 'auto')

const Modal = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  children,
  ...props
}) => {
  const modalRef = useRef()

  const modalClickHandler = useCallback(
    event => {
      if (event.target === modalRef.current) {
        onBackDropClick && onBackDropClick()
      }
    },
    [onBackDropClick]
  )
  const callback = useCallback(
    event => {
      if (event.keyCode === 27) {
        onEscape && onEscape()
      }
    },
    [onEscape]
  )

  useLayoutEffect(() => {
    disableScroll()
    window.addEventListener('keyup', callback, false)

    return () => {
      enableScroll()
      window.removeEventListener('keyup', callback, false)
    }
  })

  return (
    <StyledModal
      ref={modalRef}
      {...props}
      bg={backDrop}
      animated={animated}
      onClick={modalClickHandler}>
      {children}
    </StyledModal>
  )
}

Modal.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.color,
  backDrop: PropTypes.string,
  onBackDropClick: PropTypes.func,
  onEscape: PropTypes.func,
  animated: PropTypes.bool,
  children: PropTypes.node
}

Modal.Content = ModalContent
Modal.displayName = 'Modal'

export default Modal
