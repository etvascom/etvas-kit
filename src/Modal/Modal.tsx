import {
  Children,
  PropsWithChildren,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  FC
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

import { Box, BoxProps } from '../Box'
import { Flex } from '../Flex'
import { InterCom } from '../providers'
import { useOnClickOutside } from '../utils/hooks'
import style from './Modal.style'
import { ModalContent } from './ModalContent'
import { disableScroll, enableScroll, isInsideIframe } from './utils'

const ModalBackdrop = styled(Box)<ModalProps>(
  css(style.backdrop as any),
  ({ blurredBg }: ModalProps) =>
    blurredBg &&
    `
  @supports (backdrop-filter: blur(0)) {
      background-color: transparent;
      backdrop-filter: blur(7px);
  }
`
)
const StyledModal = styled(Box)<ModalProps>(
  css(style.wrapper as any),
  flexbox,
  ({ animated }: ModalProps) =>
    animated &&
    `@keyframes modal {
        from { opacity: 0; }
        to { opacity: 100%; }
    }
    animation-fill-mode: forwards;
    animation-name: modal;
    animation-duration:0.5s;`
)

interface ModalProps extends BoxProps {
  blurredBg?: boolean
  animated?: boolean
  backDrop?: string
  onBackDropClick?: (event: any) => void
  onEscape?: (event: any) => void
}

interface ModalSubComponents {
  Content: typeof ModalContent
}

export const Modal:FC<PropsWithChildren<ModalProps>> & ModalSubComponents = ({
  backDrop,
  onBackDropClick,
  onEscape,
  animated,
  blurredBg,
  children,
  ...props
}) => {
  const contentWrapperRef = useRef<HTMLElement>(null)
  const intercom = useRef(new InterCom('etvas.modal'))

  const isModalInIframe = useMemo(isInsideIframe, [])

  const modalBackdropClickHandler = useCallback(
    (event: any) => {
      event.preventDefault()
      onBackDropClick && onBackDropClick(event)
    },
    [onBackDropClick]
  )
  useOnClickOutside(contentWrapperRef, modalBackdropClickHandler)

  const handleKeyPress = useCallback(
    (event: any) => {
      if (event.keyCode === 27) {
        onEscape && onEscape(event)
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
    if (isValidElement<any>(child)) {
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

Modal.Content = ModalContent
Modal.displayName = 'Modal'
