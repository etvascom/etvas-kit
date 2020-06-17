import React, { useRef, useCallback, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import { InterCom } from '../providers'
import { enableScroll, disableScroll } from './utils'

const raiseIframe = iframe => {
  iframe.style.zIndex = 3
  iframe.style.position = 'relative'
}

const resetIframe = iframe => {
  iframe.style = undefined
}

export const useForeignModalShadow = () => {
  const intercom = useRef(new InterCom('etvas.modal'))
  const [backdrop, setBackdrop] = useState()
  const iframeRef = useRef()

  const handleBackdrop = useCallback(backdrop => setBackdrop(backdrop), [
    setBackdrop
  ])

  const handleBackdropClick = useCallback(() => {
    intercom.current.request('modal.close', true)
  }, [intercom])

  useLayoutEffect(() => {
    const instance = intercom.current
    instance.onRequest('modal', handleBackdrop)
    return () => {
      instance.offRequest('modal', handleBackdrop)
    }
  }, [intercom, handleBackdrop])

  useLayoutEffect(() => {
    const iframe = iframeRef.current
    if (backdrop && iframe) {
      raiseIframe(iframe)
      // disableScroll()
    } else if (iframe) {
      resetIframe(iframe)
      // enableScroll()
    }

    return () => {
      resetIframe(iframe)
      // enableScroll()
    }
  }, [backdrop, iframeRef])

  if (!backdrop) {
    return [iframeRef, null]
  }

  return [
    iframeRef,
    <Shadow backdrop={backdrop} onClick={handleBackdropClick} />
  ]
}

const Shadow = styled.div(({ backdrop }) =>
  css({
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: backdrop
  })
)
