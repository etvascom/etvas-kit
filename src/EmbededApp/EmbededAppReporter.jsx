import { useRef } from 'react'
import PropTypes from 'prop-types'
import useResizeObserver from 'use-resize-observer'
import { InterCom } from '../providers'

export const EmbededAppReporter = ({ children }) => {
  const windowRef = useRef(document.documentElement)
  const intercom = useRef(new InterCom('etvas.embededApp'))

  useResizeObserver({
    ref: windowRef,
    onResize({ width, height }) {
      intercom.current.response('size', { width, height: height })
    }
  })

  return children || null
}

EmbededAppReporter.propTypes = {
  children: PropTypes.node
}
