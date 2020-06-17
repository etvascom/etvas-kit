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

import { enableScroll, disableScroll } from './utils'

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
  const handleKeyPress = useCallback(
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
      instance.onRequest('modal.close', onBackDropClick)
    }

    return () => {
      if (backDrop) {
        instance.request('modal', null)
        instance.offRequest('modal.close', onBackDropClick)
      }
    }
  }, [backDrop, intercom, onBackDropClick])

  useLayoutEffect(() => {
    disableScroll()
    window.addEventListener('keyup', handleKeyPress, false)

    return () => {
      enableScroll()
      window.removeEventListener('keyup', handleKeyPress, false)
    }
  }, [handleKeyPress])

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
