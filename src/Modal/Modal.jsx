import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexbox, color } from 'styled-system'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import { Flex } from '@ivoryio/kogaio'
import style from './Modal.style'
import { ModalContent } from './ModalContent'
import { InterCom } from '../providers'

const StyledModal = styled(Flex)(
  css(style.wrapper),
  color,
  flexbox,
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

export const Modal = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  children,
  ...props
}) => {
  const modalRef = useRef()
  const intercom = useRef(new InterCom('etvas.modal'))

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

  useEffect(() => {
    const instance = intercom.current

    if (backDrop) {
      instance.request('modal', backDrop)
    }

    return () => {
      if (backDrop) {
        instance.request('modal', false)
      }
    }
  }, [backDrop, intercom])

  useLayoutEffect(() => {
    disableScroll()
    window.addEventListener('keyup', callback, false)

    return () => {
      enableScroll()
      window.removeEventListener('keyup', callback, false)
    }
  }, [callback])

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
  ...propTypes.color,
  ...propTypes.flexbox,
  backDrop: PropTypes.string,
  onBackDropClick: PropTypes.func,
  onEscape: PropTypes.func,
  animated: PropTypes.bool,
  children: PropTypes.node
}

Modal.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center'
}

Modal.Content = ModalContent
Modal.displayName = 'Modal'
