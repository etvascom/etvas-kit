import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexbox, color } from 'styled-system'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import { Flex } from '../Flex'
import style from './Modal.style'
import { ModalContent } from './ModalContent'
import { InterCom } from '../providers'

import { enableScroll, disableScroll } from './utils'

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

const ModalBackdrop = styled(Flex)(css(style.backdrop))

export const Modal = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  children,
  ...props
}) => {
  const intercom = useRef(new InterCom('etvas.modal'))

  const modalBackdropClickHandler = useCallback(() => {
    onBackDropClick && onBackDropClick()
  }, [onBackDropClick])
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
    instance.request('modal', { backDrop, animated })
    if (onBackDropClick) {
      instance.onRequest('modal.close', onBackDropClick)
    }

    return () => {
      instance.request('modal', null)
      if (onBackDropClick) {
        instance.offRequest('modal.close', onBackDropClick)
      }
    }
  }, [backDrop, animated, intercom, onBackDropClick])

  useLayoutEffect(() => {
    disableScroll()
    window.addEventListener('keyup', handleKeyPress, false)

    return () => {
      enableScroll()
      window.removeEventListener('keyup', handleKeyPress, false)
    }
  }, [handleKeyPress])

  return (
    <StyledModal animated={animated} {...props}>
      <ModalBackdrop bg={backDrop} onClick={modalBackdropClickHandler} />
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
