import React, { cloneElement, useRef } from 'react'
import PropTypes from 'prop-types'
import useResizeObserver from 'use-resize-observer'
import { InterCom } from '../providers'

export const EmbededAppReporter = ({ children }) => {
  const intercom = useRef(new InterCom('etvas.embededApp'))

  const { ref } = useResizeObserver({
    onResize({ width, height }) {
      intercom.current.response('size', { width, height: height })
    }
  })

  return <div ref={ref}>{children}</div>
}

EmbededAppReporter.propTypes = {
  children: PropTypes.node.isRequired
}
