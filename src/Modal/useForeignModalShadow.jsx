import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { InterCom } from '../providers'

const Z_INDEX_BASE = 50

const raiseIframe = iframe => {
  iframe.style.zIndex = 1 + Z_INDEX_BASE
}

const resetIframe = iframe => {
  iframe.style = undefined
}

export const useForeignModalShadow = () => {
  const intercom = useRef(new InterCom('etvas.modal'))
  const [backdrop, setBackdrop] = useState()
  const [animated, setAnimated] = useState(false)
  const iframeRef = useRef()
  const tk = useRef(null)

  const showBackdrop = useCallback(
    payload => {
      if (payload && typeof payload === 'object' && payload.backDrop) {
        clearTimeout(tk.current)
        setBackdrop(payload.backDrop)
        setAnimated(!!payload.animated)
      } else if (payload) {
        clearTimeout(tk.current)
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
    payload => {
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
