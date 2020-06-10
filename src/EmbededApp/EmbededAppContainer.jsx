import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { InterCom } from '../providers'

export const EmbededAppContainer = props => {
  const intercom = useRef(new InterCom('etvas.embededApp'))
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    intercom.current.onResponse('size', setSize)

    return () => intercom.offResponse('size', setSize)
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
  width: '100%'
})

EmbededAppContainer.propTypes = {}
