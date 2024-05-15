import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { InterCom } from '../providers'

const Z_INDEX_BASE = 50

const raiseIframe = (iframe: any) => {
  iframe.style.zIndex = 1 + Z_INDEX_BASE
}

const resetIframe = (iframe: any) => {
  iframe.style = undefined
}

export const useForeignModalShadow = () => {
  const intercom = useRef(new InterCom('etvas.modal'))
  const [backdrop, setBackdrop] = useState(null)
  const [animated, setAnimated] = useState(false)
  const iframeRef = useRef()
  const tk = useRef<NodeJS.Timeout | null>(null)

  const showBackdrop = useCallback(
    (payload: any) => {
      if (payload && typeof payload === 'object' && payload.backDrop) {
        tk.current && clearTimeout(tk.current)
        setBackdrop(payload.backDrop)
        setAnimated(!!payload.animated)
      } else if (payload) {
        tk.current && clearTimeout(tk.current)
        setBackdrop(payload)
        setAnimated(false)
      } else {
        setAnimated(false)
        tk.current = setTimeout(() => {
          setBackdrop(null)
        }, 0)
      }
    },
    [setBackdrop, setAnimated]
  )

  const scrollPageToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleBackdropClick = useCallback(() => {
    intercom.current.request('modal.close', null)
  }, [intercom])

  const openModal = useCallback(
    (payload: any) => {
      showBackdrop(payload)
      scrollPageToTop()
    },
    [showBackdrop]
  )

  useLayoutEffect(() => {
    const instance = intercom.current
    instance.onRequest('modal', openModal)
    return () => {
      instance.offRequest('modal', openModal)
    }
  }, [intercom, openModal])

  useLayoutEffect(() => {
    const iframe = iframeRef.current
    if (backdrop && iframe) {
      raiseIframe(iframe)
      // disableScroll()
    } else if (iframe) {
      resetIframe(iframe)
    }

    return () => {
      resetIframe(iframe)
    }
  }, [backdrop, iframeRef])

  if (!backdrop) {
    return [iframeRef, null]
  }

  return [
    iframeRef,
    <Shadow
      animated={animated}
      backdrop={backdrop}
      key='backdrop-global'
      onClick={handleBackdropClick}
    />
  ]
}
interface ShadowProps {
  backdrop: string
  animated: boolean
}

const Shadow = styled.div<ShadowProps>(
  ({ backdrop }: ShadowProps) =>
    css({
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: Z_INDEX_BASE,
      backgroundColor: backdrop
    }),
  ({ animated }: ShadowProps) =>
    animated &&
    `@keyframes modal {
        from { opacity: 0; }
        to { opacity: 100%; }
    }
    animation-fill-mode: forwards;
    animation-name: modal;
    animation-duration:0.5s;`
)
