import React, {
  Children,
  cloneElement,
  isValidElement,
  useMemo
} from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { InterCom } from '../providers'
import { useOnClickOutside } from '../utils/hooks'
import style from './Modal.style'
import { ModalContent } from './ModalContent'
import { disableScroll, enableScroll, isInsideIframe } from './utils'

const ModalBackdrop = styled(Box)(
  css(style.backdrop),
  ({ blurredBg }) =>
    blurredBg &&
    `
  @supports (backdrop-filter: blur(0)) {
      background-color: transparent;
      backdrop-filter: blur(7px);
  }
`
)
const StyledModal = styled(Box)(
  css(style.wrapper),
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

export const Modal = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  blurredBg,
  children,
  ...props
}) => {
  const contentWrapperRef = useRef()
  const intercom = useRef(new InterCom('etvas.modal'))

  const isModalInIframe = useMemo(isInsideIframe, [])

  const modalBackdropClickHandler = useCallback(() => {
    onBackDropClick && onBackDropClick()
  }, [onBackDropClick])
  useOnClickOutside(contentWrapperRef, modalBackdropClickHandler)

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

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { ref: contentWrapperRef })
    }
    return child
  })

  return (
    <>
      <ModalBackdrop bg={backDrop} blurredBg={blurredBg} />
      <StyledModal animated={animated} {...props}>
        <Container
          justifyContent='center'
          alignItems={isModalInIframe ? 'flex-start' : 'center'}>
          {childrenWithProps}
        </Container>
      </StyledModal>
    </>
  )
}

const Container = styled(Flex)`
  --verticalSpacing: ${props => props.theme.space[8]}px;
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
  blurredBg: PropTypes.bool,
  children: PropTypes.node
}

Modal.Content = ModalContent
Modal.displayName = 'Modal'
