import React, { useRef, useCallback, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import { InterCom } from '../providers'

const Z_INDEX_BASE = 50

const raiseIframe = iframe => {
  iframe.style.zIndex = 1 + Z_INDEX_BASE
  iframe.style.position = 'relative'
}

const resetIframe = iframe => {
  iframe.style = undefined
}

export const useForeignModalShadow = () => {
  const intercom = useRef(new InterCom('etvas.modal'))
  const [backdrop, setBackdrop] = useState()
  const [animated, setAnimated] = useState(true)
  const iframeRef = useRef()

  const showBackdrop = useCallback(
    payload => {
      if (payload && typeof payload === 'object' && payload.backDrop) {
        setBackdrop(payload.backDrop)
        setAnimated(payload.animated)
      } else {
        setBackdrop(payload)
        setAnimated(false)
      }
    },
    [setBackdrop, setAnimated]
  )

  const handleBackdropClick = useCallback(() => {
    intercom.current.request('modal.close', true)
  }, [intercom])

  useLayoutEffect(() => {
    const instance = intercom.current
    instance.onRequest('modal', showBackdrop)
    return () => {
      instance.offRequest('modal', showBackdrop)
    }
  }, [intercom, showBackdrop])

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

const Shadow = styled.div(
  ({ backdrop }) =>
    css({
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: Z_INDEX_BASE,
      backgroundColor: backdrop
    }),
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
