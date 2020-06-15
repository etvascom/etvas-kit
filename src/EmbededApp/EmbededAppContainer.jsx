import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { InterCom } from '../providers'

export const EmbededAppContainer = props => {
  const intercom = useRef(new InterCom('etvas.embededApp'))
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    intercom.current.onResponse('size', setSize)
    const instance = intercom.current

    return () => instance.offResponse('size', setSize)
  }, [setSize, intercom])

  let frameHeight = 'auto'
  let scrolling = 'auto'

  if (size.height) {
    scrolling = 'no'
    frameHeight = `${size.height}px`
  }

  return <StyledIframe {...props} height={frameHeight} scrolling={scrolling} />
}

const StyledIframe = styled.iframe({
  width: '100%',
  display: 'block',
  border: 'none'
})

EmbededAppContainer.propTypes = {}
