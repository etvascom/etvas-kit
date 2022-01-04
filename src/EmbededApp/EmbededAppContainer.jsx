import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import styled from 'styled-components'
import { InterCom } from '../providers'
import { useForeignModalShadow } from '../Modal'

export const EmbededAppContainer = ({ defaultHeight, ...props }) => {
  const intercom = useRef(new InterCom('etvas.embededApp'))
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [iframeRef, shadowElement] = useForeignModalShadow()

  useEffect(() => {
    intercom.current.onResponse('size', setSize)
    const instance = intercom.current

    return () => instance.offResponse('size', setSize)
  }, [setSize, intercom])

  let frameHeight = defaultHeight
  let scrolling = 'auto'

  if (size.height) {
    scrolling = 'no'
    frameHeight = `${size.height}px`
  }

  return (
    <>
      {shadowElement}
      <StyledIframe
        {...props}
        ref={iframeRef}
        height={frameHeight}
        scrolling={scrolling}
      />
    </>
  )
}

const StyledIframe = styled.iframe(({ height }) =>
  css({
    position: 'relative',
    width: '100%',
    display: 'block',
    border: 'none',
    height
  })
)

EmbededAppContainer.propTypes = {
  defaultHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  useForeignModalShadow: PropTypes.bool
}
