import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexbox, color } from 'styled-system'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import { Flex } from '../Flex'
import { Box } from '../Box'
import style from './Modal.style'
import { ModalContent } from './ModalContent'
import { InterCom } from '../providers'

import { enableScroll, disableScroll } from './utils'
import { useOnClickOutside } from '../utils/hooks'

const StyledModal = styled(Box)(
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
  const ref = useRef()
  const intercom = useRef(new InterCom('etvas.modal'))

  const modalBackdropClickHandler = useCallback(() => {
    onBackDropClick && onBackDropClick()
  }, [onBackDropClick])
  useOnClickOutside(ref, modalBackdropClickHandler)

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
    <>
      <ModalBackdrop bg={backDrop} />
      <StyledModal animated={animated} {...props}>
        <ContentWrapper justifyContent={['unset', 'center']}>
          <Box width={1} ref={ref}>
            {children}
          </Box>
        </ContentWrapper>
      </StyledModal>
    </>
  )
}

const ContentWrapper = styled(Flex)`
  --verticalSpacing: 2rem;
  align-items: center;
  margin: var(--verticalSpacing) auto;
  min-height: calc(100% - 2 * var(--verticalSpacing));
`

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
